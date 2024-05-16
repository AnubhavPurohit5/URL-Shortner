const express = require("express");
const Url = require("../db/index");
const router = express.Router();
const { authcheck } = require("../middleware/auth");

router.get("/", authcheck, async function (req, res) {
  const url = await Url.find({});
  return res.render("home", { url: url });
});
router.get("/signup", function (req, res) {
  return res.render("signup");
});
router.get("/login", function (req, res) {
  return res.render("login");
});
module.exports = router;
