const express = require("express");
const app = express();
const path = require("path");

const urlrouter = require("./routes/url");
const staticrouter = require("./routes/static");
const userrouter = require("./routes/user");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", urlrouter);
app.use("/", staticrouter);
app.use("/user", userrouter);
app.listen(4000);
