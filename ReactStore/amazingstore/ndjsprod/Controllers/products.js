var fs = require("fs");

const productsJson = require("../products.json");

function getProducts(req, res) {
  res.status(200).json({ data: productsJson });
}

function getProductsId(req, res) {
  res.status(200).json({ data: productsJson[0] });
}

const addProduct = function(req, res) {
  let content;
  const {
    body: { name, description, manufacturer, price, categories, rating }
  } = req;
  let maxId = 15;

  fs.readFile("./products.json", "utf8", function read(err, data) {
    if (err) {
      return req.status(500).json({});
    }
    content = JSON.parse(data);
    maxId = content[content.length-1].id;
    maxId++;

    content[content.length] = {
      id: maxId,
      name: name,
      description: description,
      manufacturer: manufacturer,
      price: price,
      categories: categories,
      rating: rating
    };
    return assignValue();
  });
  function assignValue() {
    fs.writeFile("./products.json", JSON.stringify(content), err => {
      if (!err) {
        return res.status(200).json({ data: content[content.length-1]});
      }
      return res.status(500).json({});
    });
  }
};

module.exports = { getProducts, getProductsId, addProduct };
