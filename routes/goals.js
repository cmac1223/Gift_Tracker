var express = require('express');
var router = express.Router();

var Goal = require('../models/goal');

router.get('/', (request, response) => {
  // Find all of the Goals from the database
  Goal.find({}).exec(function(error, goals) {
    if (error) {
      console.log('Error retrieving goals!');
      console.log('Error: ' + error);
      return;
    }

    // if there are no errors, send the goals back as JSON
    console.log(goals);
    response.send(goals);
  });
});

// show route
router.get('/:goalId', function (request, response) {

  const goalIdToShow = request.params.goalId;

  Goal.findById(goalIdToShow, function (error, foundGoal) {
    if (error) {
      console.log('Error finding Goal with ID of ' + goalIdToShow);
      return;
    }
    response.send(foundGoal);
  });

});

// create route
router.post('/', (request, response) => {

  // grab the new Goal info from the request
  let goalFromRequest = request.body;

  // then build a new Goal model with the info
  // REMEMBER: the new Date will be created by the DB
  let newGoal = new Goal({
    entry: goalFromRequest.entry,
    cost: goalFromRequest.cost
  });

  // save the new Goal model to the DB
  newGoal.save(function (error, newGoal) {
    if (error) {
      console.log(error);
      return;
    }

    // once the new Goal has been saved, return it to the client
    response.send(newGoal);
  });
});

// update route
router.patch('/', function (request, response) {

  let goalToUpdate = request.body;

  console.log(goalToUpdate);

  Goal.findByIdAndUpdate(goalToUpdate._id, goalToUpdate, { new: true})
    .exec(function (error, updatedGoal) {

      if (error) {
        console.log("Error while updating Goal with ID of " + goalToUpdate.id);
        return;
      }

      response.send(200);
    });
});

// delete route
router.delete('/:goalId', function (request, response){

  const goalIdToDelete = request.params.goalId;

  Goal.findByIdAndRemove(goalIdToDelete).exec(function (error) {
    if (error) {
      console.log("Error while deleting Goal with ID of " + goalIdToDelete);
      return;
    }

    // once the goal has been deleted, tell the server everything was successful
    response.sendStatus(200);
  })
});

module.exports = router;