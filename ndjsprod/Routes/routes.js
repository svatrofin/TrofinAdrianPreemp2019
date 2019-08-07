const express = require("express");
const app = require("./app");
const router = express.Router();
const categories = require("./categories");
const products = require("./products");

app.use("/categories", categories);
app.use("/products", products);

module.exports = router;
