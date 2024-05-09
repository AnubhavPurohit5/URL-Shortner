const express = require("express");
const router = express.Router();
const { generatenewshorturl, Analytics } = require("../controllers/url");

router.post("/", generatenewshorturl);
router.get("/analytics/:shortid", Analytics);

module.exports = router;
