const productsJson = require("../products.json");
const productsObj = { data: productsJson };

function getProducts(req, res) {
  res.json(productsObj);
}

function getProductsId(req, res) {
  res.json(productsObj.data[req.params.id - 1]);
}

module.exports = { getProducts, getProductsId };
