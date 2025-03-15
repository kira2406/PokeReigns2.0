const admin = require("../config/firebase");

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split("Bearer ")[1];

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken; // Attach user info to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verifyToken;
