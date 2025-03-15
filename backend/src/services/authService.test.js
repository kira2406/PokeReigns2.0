const { registerUser, loginUser, logoutUser } = require("./authService");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} = require("firebase/auth");
const { admin, auth } = require("../config/firebase");

jest.mock("firebase/auth", () => ({
  createUserWithEmailAndPassword: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
}));

jest.mock("../config/firebase", () => ({
  admin: {
    auth: jest.fn().mockReturnValue({
      createCustomToken: jest.fn(),
    }),
  },
  auth: {
    currentUser: null,
  },
}));

describe("AuthService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("registerUser should successfully register a new user", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "password123";
    const mockUserCredential = {
      user: { uid: "user123", email: mockEmail },
    };
    createUserWithEmailAndPassword.mockResolvedValue(mockUserCredential);

    const user = await registerUser(mockEmail, mockPassword);

    expect(user).toHaveProperty("uid", "user123");

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
      expect.any(Object),
      mockEmail,
      mockPassword
    );
  });

  test("registerUser should throw error if email is already in use", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "password123";
    const mockError = {
      code: "auth/email-already-in-use",
    };
    createUserWithEmailAndPassword.mockRejectedValue(mockError);

    const registerUserPromise = registerUser(mockEmail, mockPassword);

    await expect(registerUserPromise).rejects.toThrow(
      "Registration Error: This email is already associated with an account."
    );
  });

  test("registerUser should throw error if email is not valid", async () => {
    const mockEmail = "test@example.com";
    const mockPassword = "password123";
    const mockError = {
      code: "auth/invalid-email",
    };
    createUserWithEmailAndPassword.mockRejectedValue(mockError);

    const registerUserPromise = registerUser(mockEmail, mockPassword);

    await expect(registerUserPromise).rejects.toThrow(
      "Registration Error: The email address is not valid."
    );
  });

  test("registerUser should throw default error if there is some different error", async () => {
    // Arrange
    const mockEmail = "test@example.com";
    const mockPassword = "password123";
    const mockError = {
      code: "auth/some-error",
    };
    createUserWithEmailAndPassword.mockRejectedValue(mockError);

    const registerUserPromise = registerUser(mockEmail, mockPassword);

    await expect(registerUserPromise).rejects.toThrow(
      "Registration Error: Something went wrong."
    );
  });

  test('loginUser should return a token for valid credentials', async () => {
    
    const mockEmail = 'test@example.com';
    const mockPassword = 'password123';
    const mockUserCredential = {
      user: { uid: 'user123', email: mockEmail },
    };
    const mockToken = 'sample-token';
    signInWithEmailAndPassword.mockResolvedValue(mockUserCredential);
    admin.auth().createCustomToken.mockResolvedValue(mockToken);

    const token = await loginUser(mockEmail, mockPassword);

    expect(token).toBe(mockToken);
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(expect.any(Object), mockEmail, mockPassword);
  });

  test('loginUser should throw error for invalid credentials', async () => {
    
    const mockEmail = 'test@example.com';
    const mockPassword = 'wrongpassword';
    const mockError = {
      code: 'auth/invalid-credential',
    };
    signInWithEmailAndPassword.mockRejectedValue(mockError);

    const loginUserPromise = loginUser(mockEmail, mockPassword)

    await expect(loginUserPromise).rejects.toThrow('Login Error: Invalid Credentials.');
  });

  test('loginUser should throw default error for uncategorized error', async () => {
    
    const mockEmail = 'test@example.com';
    const mockPassword = 'wrongpassword';
    const mockError = {
      code: 'auth/some-error',
    };
    signInWithEmailAndPassword.mockRejectedValue(mockError);

    const loginUserPromise = loginUser(mockEmail, mockPassword)

    await expect(loginUserPromise).rejects.toThrow('Login Error: Something went wrong.');
  });

  test("logoutUser should successfully log out", async () => {
    
    signOut.mockResolvedValue();

    await logoutUser();

    expect(signOut).toHaveBeenCalled();
  });

  test("logoutUser should throw an error if logout fails", async () => {
    const mockError = new Error("Logout failed");
    signOut.mockRejectedValue(mockError);

    const logoutUserPromise = logoutUser()

    await expect(logoutUserPromise).rejects.toThrow("Logout Error: Logout failed");
  });
});
