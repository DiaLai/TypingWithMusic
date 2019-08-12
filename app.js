const express = require("express");
const app = express();
var ejs = require("ejs");

var path = require("path");
app.set("port", 3002);
app.engine("html", ejs.__express);
app.set("views", __dirname);
app.set("view engine", "html");

app.use(express.static(path.join(__dirname, "public")));
app.use("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(app.get("port"), () =>
  console.log("Game app is running on port", app.get("port"))
);
