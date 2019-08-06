
var inquirer = require('inquirer');
var writeFile = require('./writeFile');
var deleteFile = require('./deleteFile')






var questions = [
  {
    type: 'input',
    name: 'product_name',
    message: "What's your first Product"
  },
  {
    type: 'input',
    name: 'description_name',
    message: "What's your description",
    
  },
 
  {
    type: 'input',
    name: 'price',
    message: "What's your price",
    validate: function(value) {
        var pass = value.match(/^\d+$/);
        if(pass){
      
        return true;
      }

      return 'Enter Numbers Please';
    }
  }
]; 


inquirer.prompt(questions).then(answers => {
    console.log(answers);
    let product_name = answers.product_name;
    console.log(product_name);

    let description_name = answers.description_name;
    console.log(description_name);

    let price = answers.price;
    console.log(price);



    writeFile(answers);
    // deleteFile(answers);

});