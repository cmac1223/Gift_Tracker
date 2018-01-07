var express = require('express');
var router = express.Router();

var ShoppingList = require('../models/shoppingList');

router.get('/', (request, response) => {

  //Find all of the Shopping-lists from the database
  ShoppingList.find({}).exec(function (error, shoppingLists){
    if (error) {
      console.log('Error retrieving shoppingLists!');
      console.log('Error: ' + error);
      return;
    }
    // if there are no errors, send the shoppingLists back as JSON
    response.send(shoppingLists);
  })
})

module.exports = router;