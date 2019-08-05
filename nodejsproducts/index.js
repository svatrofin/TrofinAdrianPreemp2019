const http = require("http");
const fs = require("fs");
const url = require("url");

http
  .createServer(function(req, res) {
    res
      .setHeader("Access-Control-Allow-Origin", "*")
      .setHeader("content-type", "application.json");

    var urlParts = url.parse(req.url);
    console.log(req.url, urlParts);

    if (urlParts.pathname === "/categories") {
      categories(req, res);
    }

    if (urlParts.pathname === "/products") {
      products(req, res);
    }

    if (/([\/]products[\/]?[0-9]+)/.test(url.pathname)) {
      singleProduct(req, res);
    }
  })

  .listen(5000, "127.0.0.1");
console.log("serverul mere la 5000");

function categories(req, res) {
  fs.readFile("./categories.json", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
}

function products(req, res) {
  fs.readFile("./products.json", (err, data) => {
    if (err) throw err;
    res.end(data);
  });
}

function singleProduct(req, res) {
  console.log(req);
  let myArg = req.url;
  var numb = myArg.match(/\d/g);
  numb = numb.join("");
  console.log(numb);
  fs.readFile("./products.json", "utf8", (err, data) => {
    const myInfo = JSON.parse(data);
    const found = myInfo.filter(myInfo.id === 1);
    console.log(found);
  });
}
