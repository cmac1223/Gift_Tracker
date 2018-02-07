var express = require('express');
var router = express.Router();
var List = require('../models/list');
var Goal = require('../models/goal');


router.get('/', (request, response) => {

  //Find all of the Shopping-lists from the database
  List.find({}).exec(function (error, lists){
    if (error) {
      console.log('Error retrieving lists!');
      console.log('Error: ' + error);
      return;
    }
    // if there are no errors, send the shoppingLists back as JSON
    response.send(lists);
  })
})

//show route
router.get('/:listId/', function (request, response) {
  
  const listIdToShow = request.params.listId;

  List.findById(listIdToShow, function (error, foundList) {
    if (error){
      console.log('Error finding List with ID of ' + listIdToShow);
      return;
    }

    response.send(foundList);
  });
});

router.post('/', (request, response) => {

  // grab the new ShoppingList info from the request
  let listFromRequest = request.body;

  // then build a new ShoppingList model with the info
  // remember: the new Date will be created by the database
  let newList = new List({ 
      title: listFromRequest.title
  });

  // save the new ShoppingList model to the database
  newList.save(function (error, newList){
    if (error) {
      console.log(error);
      return;
    }
    // once the new shoppingList has been saved, return it to the client
    response.send(newList);
  });
});

// deletes the list route - finds by id and removes from database
router.delete('/:listId', function (request, response){
  const listIdToDelete = request.params.listId;
  List.findByIdAndRemove(listIdToDelete).exec(function (error){
    if (error){
      console.log("Error while deleting List with ID of " + listIdToDelete);
      return;
    }
    // once the list has been deleted, tell the server everything was successful
    response.sendStatus(200);
  });
});

module.exports = router;