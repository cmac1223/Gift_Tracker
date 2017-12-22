// angular 
//   .module('myResolutionApp')
//   .controller('GoalsController', GoalsController);

GoalsController.$inject = ['$http', '$state', '$stateParams', 'GoalsService', '$scope'];

function GoalsController($http, $state, $stateParams, GoalsService, $scope) {
  let vm = this;

  /*
  We will run this function the first time we load our component.
  We can use an 'initialize' function to pre-load some data from the DB
  */

  function initialize() {
    getAllGoalsFromDatabase();
  }

  initialize();

  // this function grabs all of the goals from the database
  // via an AJAX call
  function getAllGoalsFromDatabase() {
    GoalsService.getAllGoalsFromDatabase()
      .then(
      function success(response) {
        // if the call is successful, return the list of goals
        vm.goalEntries = response.data;
      },

      function failure(response) {
        console.log('Error retrieving Goal Entries from database!');
      }
      );
    }
  // This function handles our form submission.
  vm.addGoal = function (){

    // the new Goal object will be created by binding to the form inputs
    const newGoal = {
      goal: vm.newGoalAmount,
      cost: vm.newGoalNote
    };

    // Make an ajax call to save the new Goal to the databse:
    GoalsService.addNewGoalToDatabase(newGoal)
      .then(
        function success(response) {
          // only push to the goalEntries array if the ajax call is successful
          const newGoalFromDatabase = response.data;
          vm.goalEntries.push(newGoalFromDatabase);
          // then reset the form so we can submit more goals
          resetForm();
        },
        function failure(response) {
          // if the http call is not successful, log the error
          //DO NOT clear the form
          // DO NOT push the new object to the array
          console.log('Error saving new Goal to database!');
        }
      )
  }

}

module.exports = GoalsController;