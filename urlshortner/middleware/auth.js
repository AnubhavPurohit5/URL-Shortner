const jwt = require("jsonwebtoken");
const jwtsecret = "nasty";
function middleware(req, res, next) {
  const token = req.cookies.jwt;
  try {
    const verify = jwt.verify(token, jwtsecret);
    if (!verify) {
      res.redirect("/login");
    }
    next();
  } catch (error) {
    console.log(error);
  }
}
module.exports = middleware;
