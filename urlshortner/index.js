const express = require("express");
const app = express();
// const path = require("path");
const urlrouter = require("./routes/url");
const Url = require("./db/index");
// app.set("view engine", "ejs");
// app.set("views", path.resolve("./views"));
app.use(express.json());
app.use("/url", urlrouter);
app.get("/url/yo/:shortid", async (req, res) => {
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
});
app.get("/yo/test", async (req, res) => {
  const allurl = await Url.find({});
  res.render("home");
});

app.listen(3000, () => {
  console.log("listening to port");
});
