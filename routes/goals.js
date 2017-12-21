var express = require('express');
var router = express.Router();

var Goal = require('../models/goal');

router.get('/', (request, response) => {
  // Find all of the Goals from the database
  Goals.find({}).exec(function(error, goals) {
    if (error) {
      console.log('Error retrieving goals!');
      console.log('Error: ' + error);
      return;
    }

    // if there are no errors, send the goals back as JSON
    console.log(goals);
    response.send(goals);
  })
})

module.exports = router;