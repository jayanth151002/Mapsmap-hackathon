const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  username: { tpe: String, required: true },
  password: { tpe: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
