const express = require("express");
const router = express.Router();
const {
  generatenewshorturl,
  Analytics,
  redirect,
} = require("../controllers/url");

router.post("/", generatenewshorturl);
router.get("/analytics/:shortid", Analytics);
router.get("/redirect/:shortid", redirect);

module.exports = router;
