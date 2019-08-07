const express = require("express");
const app = express();

const products = require("./routes/products");
const categories = require("./routes/categories");

app.use("/products", products);
app.use("/categories", categories);

module.exports = app;
