var express = require('express');
var router = express.Router();

var ShoppingList = require('../models/shoppingList');
var Goal = require('../models/goal');

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

router.get('/:shoppingListId/', function (request, response) {
  
  const shoppingListIdToShow = request.params.shoppingId;

  ShoppingList.findById(shoppingListIdToShow, function (error, foundShoppingList) {
    if (error){
      console.log('Error finding ShoppingList with ID of ' + shoppingListIdToShow);
      return;
    }

    response.send(foundShoppingList);
  });
});

router.post('/', (request, response) => {

  // grab the new ShoppingList info from the request
  let shoppingListFromRequest = request.body;

  // then build a new ShoppingList model with the info
  // remember: the new Date will be created by the database
  let newShoppingList = new ShoppingList({ 
      title: shoppingListFromRequest.title
  });

  // save the new ShoppingList model to the database
  newShoppingList.save(function (error, newShoppingList){
    if (error) {
      console.log(error);
      return;
    }
    // once the new shoppingList has been saved, return it to the client
    response.send(newShoppingList);
  });
});

module.exports = router;