var express = require("express");
var router = express.Router();
const categoriesJson = require("../ndjsprod/categories.json");
const categoriesObj = { data: categoriesJson };
const productsJson = require("../ndjsprod/products.json");
const productsObj = { data: productsJson };

router.get("/", (req, res) => {
  
  res.json(categoriesObj);
});

router.get("/:id/products",function(req,res){
  let myCatProductsArr = [];

  for( let i=0;i<productsJson.length;i++){
    if (productsJson[i].categories.indexOf(parseInt(req.params.id)) !== -1){
      myCatProductsArr.push(productsJson[i].name);
    }
  }
  let myCategoryProductsObj = {data:myCatProductsArr};
  res.json(myCategoryProductsObj);
});

module.exports = router;
