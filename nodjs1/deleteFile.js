const fs = require("fs");

module.exports = function writeProductFile(jsonFile) {
 json = JSON.stringify(jsonFile);
 let fileName = jsonFile.item_name;fs.unlink(`./items.json`, json, err => {
  if (!err) {
    console.log("Delete");
  }
});
};