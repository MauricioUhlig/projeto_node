// index.js

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "3000";

app.use(express.static('public'));
app.get("/", (req, res) => {
  res.status(200).send("WHATABYTE: Food For Devs");
});


app.listen(port, () => {
  console.log(`Listening to requests on http://weblink:${port}`);
});