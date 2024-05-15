const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtsecret = "nasty";
const User = require("../db/user");
async function signup(req, res) {
  const { email, password, username } = req.body;
  const hashedpass = await bcrypt.hash(password, 10);
  await User.create({
    email: email,
    password: hashedpass,
    username: username,
  });

  return res.redirect("/");
}
async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const value = {
      email: email,
      username: user.username,
    };
    const token = jwt.sign(value, jwtsecret);
    res.cookie("jwt", token);
    return res.redirect("/");
  }
  // try {
  //   const jwttoken = req.cookies.jwt;
  //   const jwtverifying = jwt.sign(jwttoken, jwtsecret);
  //   if (jwtverifying) {
  //     res.render("home", { error: "invalid user " });
  //   }
  // const user = await User.findOne({ email, password });
  // if (!user) {
  // }

  // return res.redirect("/");
  //   res.send("nhi hua");
  // } catch (error) {
  //   console.log(error);
  // }
}
module.exports = { signup, login };
