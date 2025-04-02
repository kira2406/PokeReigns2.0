const { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } = require('firebase/auth');
const { admin,auth } = require('../config/firebase');

// Register User
const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user
    return user
  } catch (error) {
    console.log("error", error.code)
    let errorMessage = "Registration Error: Something went wrong."

    switch (error?.code) {
        case "auth/email-already-in-use":
            errorMessage = "Registration Error: This email is already associated with an account."
            break;
        case "auth/invalid-email":
            errorMessage = "Registration Error: The email address is not valid."
            break;
    
        default:
            errorMessage = "Registration Error: Something went wrong."
            break;
    }
    throw new Error(errorMessage);
  }
};

// Login User
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user
    return user;
  } catch (error) {
    let errorMessage = "Login Error: Invalid Credentials."

    switch (error?.code) {
        case "auth/invalid-credential":
            errorMessage = "Login Error: Invalid Credentials."
            break;
        default:
            errorMessage = "Login Error: Invalid Credentials."
            break;
    }
    throw new Error(errorMessage);
  }
};

// Logout User
const logoutUser = async () => {
    try{
        await signOut(auth);
    }
    catch(error) {
        throw new Error("Logout Error: " + error.message);
    }
};

const verifyTokenService = async (token) => {
  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    return { valid: true, uid: decodedToken.uid };
  } catch (error) {
    console.log("error", error)
    throw new Error("Invalid token");
  }
};

module.exports = { registerUser, loginUser, logoutUser, verifyTokenService };
