const shortuniqueid = require("short-unique-id");
const uid = new shortuniqueid();

const Url = require("../db/index");
async function generatenewshorturl(req, res) {
  const url = req.body.url;
  if (!url) {
    res.status(400).send("give some url");
  }
  const shortid = uid.rnd(8);
  Url.create({
    shortid: shortid,
    redirecturl: url,
    visithistory: [],
  });
  res.json({
    id: shortid,
  });
}

async function Analytics(req, res) {
  const shortid = req.params.shortid;
  console.log(shortid);
  const analytics = await Url.findOne({
    shortid,
  });

  res.json({
    Totalclicks: analytics.visithistory.length,
    analytics: analytics.visithistory,
  });
}

module.exports = { generatenewshorturl, Analytics };
