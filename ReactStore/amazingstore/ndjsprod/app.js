const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const products = require("./routes/products");
const categories = require("./routes/categories");

app.use(express.urlencoded({ extended:false}));
app.use(bodyParser.json())

app.use("/products", products);
app.use("/categories", categories);

module.exports = app;
