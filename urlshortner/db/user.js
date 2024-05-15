const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/urlshortner")
  .then(() => console.log("connected"));
const user = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("user", user);

module.exports = User;
