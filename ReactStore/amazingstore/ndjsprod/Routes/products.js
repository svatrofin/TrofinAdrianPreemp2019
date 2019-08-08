var express = require("express");
var router = express.Router();

const { getProducts, getProductsId, addProduct } = require("../Controllers/products");
const {
  getUserByIDSchema,
  validatePathParams
} = require("../middlewares/JoiMW.js");

router.get("/", getProducts);

router.get("/:id", validatePathParams(getUserByIDSchema), getProductsId);

router.post("/", addProduct);

module.exports = router;
