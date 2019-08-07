const categoriesJson = require("../categories.json");
const categoriesObj = { data: categoriesJson };
const productsJson = require("../products.json");

function getCategories(req, res) {
  res.json(categoriesObj);
}

function getCategoriesID(req, res) {
  let myCatProductsArr = [];

  for (let i = 0; i < productsJson.length; i++) {
    if (productsJson[i].categories.indexOf(parseInt(req.params.id)) !== -1) {
      myCatProductsArr.push(productsJson[i].name);
    }
  }
  let myCategoryProductsObj = { data: myCatProductsArr };
  res.json(myCategoryProductsObj);
}

module.exports = { getCategories, getCategoriesID };
