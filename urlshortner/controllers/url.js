const shortuniqueid = require("short-unique-id");
const uid = new shortuniqueid();

const Url = require("../db/index");
async function generatenewshorturl(req, res) {
  const url = req.body.url;
  if (!url) {
    res.status(400).send("give some url");
  }
  const shortid = uid.rnd(8);
  console.log(shortid);
  Url.create({
    shortid: shortid,
    redirecturl: url,
    visithistory: [],
  });
  return res.render("home", { id: shortid });
  res.json({
    id: shortid,
  });
}

async function Analytics(req, res) {
  const shortid = req.params.shortid;

  const analytics = await Url.findOne({
    shortid,
  });

  res.json({
    Totalclicks: analytics.visithistory.length,
    analytics: analytics.visithistory,
  });
}
async function redirect(req, res) {
  const shortid = req.params.shortid;
  const entry = await Url.findOneAndUpdate(
    { shortid },
    {
      $push: {
        visithistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirecturl);
}
module.exports = { generatenewshorturl, Analytics, redirect };
