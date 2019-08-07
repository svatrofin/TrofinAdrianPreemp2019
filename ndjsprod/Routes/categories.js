var express = require("express");
var router = express.Router();

const { getCategories, getCategoriesID } = require("../Controllers/categories");

router.get("/", getCategories);

router.get("/:id/products", getCategoriesID);

module.exports = router;
