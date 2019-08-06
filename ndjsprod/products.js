var express = require("express");
var router = express.Router();
const productsJson = require("../ndjsprod/products.json");
const productsObj = { data: productsJson };

router.get("/", (req, res) => {
  res.json(productsObj);
});

router.get("/:id", function(req, res) {
  res.json(productsObj.data[req.params.id - 1]);
});
module.exports = router;
