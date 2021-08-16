const { strict } = require("assert");
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const port = 3000;

const actions = JSON.parse(fs.readFileSync("./actions.json", "utf-8"));
const elements = JSON.parse(fs.readFileSync("./elements.json", "utf-8"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function resolveAction(query) {
  let resolverObject = { action: "null", element: "null" };
  let words = query.split(" ");
  console.log(words);
  words.forEach((element) => {
    console.log(element);
    if (element in actions) resolverObject.action = element;
    if (element in elements) resolverObject.element = element;
  });
  return resolverObject;
}

// console.log("add" in actions);

console.log(resolveAction("add row and get lost"));
