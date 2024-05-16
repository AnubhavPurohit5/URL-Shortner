const jwt = require("jsonwebtoken");
const jwtsecret = "nasty";
function middleware(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) res.redirect("/login");
  try {
    jwt.verify(token, jwtsecret);

    next();
  } catch (error) {
    res.redirect("/login");
  }
}

function authcheck(req, res, next) {
  const token = req.cookies.jwt;
  if (!token) res.redirect("/login");
  try {
    jwt.verify(token, jwtsecret);

    next();
  } catch (error) {
    res.redirect("/login");
  }
}
module.exports = { middleware, authcheck };
