const http = require("http");
const express = require("express");
const app = require("./app");
const server = http.createServer(app);
const port = 5000;
const router = express.Router();
const categories = require("./categories");
const products = require("./products");
var bodyParser = require("body-parser");

router.get("/", function(req, res) {
  res.status(200).send("OK");
  res.status(404).send("File not found");
});

app.use("/categories", categories);

app.use("/products", products);

app.use("/", router);

app.use(bodyParser.json());

server.listen(port);
console.log("Port is Open", port);
