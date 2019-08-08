const categoriesJson = require("../categories.json");

const productsJson = require("../products.json");

function getCategories(req, res) {
  res.json(200).json({data : categoriesJson});
}

function getCategoriesID(req, res) {
  let myCatProductsArr = [];

  for (let i = 0; i < productsJson.length; i++) {
    if (productsJson[i].categories.indexOf(parseInt[0])) {
      myCatProductsArr.push(productsJson[i].name);
    }
  }
  let myCategoryProductsObj = { data: myCatProductsArr };
  res.json(200).json({data : myCategoryProductsObj});
}

module.exports = { getCategories, getCategoriesID };
