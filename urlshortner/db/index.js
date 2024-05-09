const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/urlshortner").then(() => {
  console.log("connected to mongodb");
});

const url = new mongoose.Schema(
  {
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
    redirecturl: {
      type: String,
      required: true,
    },
    visithistory: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

const Url = mongoose.model("url", url);
module.exports = Url;
