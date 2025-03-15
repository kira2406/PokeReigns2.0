const authService = require("../services/authService");

const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.registerUser(email, password);
    res.status(201).json({ status: "success", user: user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authService.loginUser(email, password);
    res.status(200).json({ status: "success", token: token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  try {
    await authService.logoutUser();
    res.status(200).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
