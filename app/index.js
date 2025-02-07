const os = require("os");
const express = require("express");
// f4509299-ee31-4e38-93a8-040dc75c9310
const app = express();

app.get("/hostname", (req, res) => {
  res.send(os.hostname());
});

app.get("/author", (req, res) => {
  res.send(process.env.AUTHOR);
});

app.get("/id", (req, res) => {
  res.send(process.env.INDEX);
});

app.listen(process.env.PORT || 8000, () => console.log(`Server listen ${process.env.PORT || 8000} port`));
