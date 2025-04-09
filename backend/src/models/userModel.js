const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  numBadges: { type: Number, default: 0 },
  displayName: { type: String, default: null },
  trainerId: { type: String, default: null }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
