var express = require('express');
// you need to set mergeParams: true on the router,
// if you want to access params from the parent router
var router = express.Router({ mergeParams: true })
var Goal = require('../models/goal');
var List = require('../models/list');


//show route
router.get('/:goalId', function (request, response) {
  
  const goalIdToShow = request.params.goalId;
  const listIdToShow = request.params.listId;
  
  Goal.findById(goalIdToShow, function (error, foundGoal) {
    if (error) {
      console.log('Error finding Credit with ID of ' + goalIdToShow);
      return;
    }
    
    response.send(foundGoal);
  });
  
});


// create route
router.post('/', (request, response) => {
  
  // grab the shoppingList ID we want to create a new goal for
  var listId = request.params.listId;
  var goalId = request.params.goalId;

  // grab the new Goal info from the request
  // let goalFromRequest = request.body;

  // then grab the new Goal that we created using the form
  var newGoalEntry = request.body.entry;
  var newGoalCost = request.body.cost;

  // Find the shoppingList in the database we want to save the new Goal for
  List.findById(listId)
    .exec(function (error, list) {

      // then build a new Goal model with the info
      // REMEMBER: the new Date will be created by the DB
      let newGoal = new Goal(({
        entry: newGoalEntry,
        cost: newGoalCost
      }));

      // add a new Goal to the ShoppingList, using the data
      // we grabbed off of the form
     list.goal.push(newGoal);
     console.log(newGoal);

      // once we have added the new Goal to the shoppingList's collection
      // we can save the ShoppingList
      list.save(function (error) {
        if (error) {
          console.log(error);
          return;
        }

        response.send(newGoal);
      })
    });
});

// goal delete route
router.delete('/:goalId', (request, response) => {
  var listId = request.params.listId;
  var goalId = request.params.goalId;

  List.findById(listId)
    .exec(function (error, list){
      
      var indexOfGoal = '';

      var goalResult = list && list.goal.find(function (gi, idx){
        indexOfGoal = idx;
        return gi._id == goalId;
      });
      list.goal.splice(indexOfGoal, 1);
      list.save(function (error){
        if (error) {
          console.log(error);
          return;
        }
        response.send('successfully deleted');
      })
    })
})
    
 



module.exports = router;