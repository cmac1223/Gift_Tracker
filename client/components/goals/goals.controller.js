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
  console.log('>+++++<>')
  function getAllGoalsFromDatabase() {
    GoalsService.getAllGoalsFromDatabase()
     .then(
      function success(response) {
        // if the call is successful, return the list of goals
        vm.goalEntries = response.data;
        console.log(response.data)
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
      entry: vm.newGoalEntry,
      cost: vm.newGoalCost
    };

    // Make an ajax call to save the new Goal to the databse:
    GoalsService.addNewGoalToDatabase(newGoal)
      .then(
        function success(response) {
          // only push to the goalEntries array if the ajax call is successful
          const newGoal = response.data;
          vm.goalEntries.push(newGoal);
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

  vm.deleteGoal = function (goalIndexToDelete, goalIdToDeleteFromDatabase) {

    GoalsService.deleteIdFromDatabase(goalIdToDeleteFromDatabase)
      .then(
        function success(response) {
          // only delete the Goal from the Angular array if 
          // it was successfully deleted from the database
          vm.goalEntries.splice(goalIndexToDelete, 1);
        },
        function failure(response) {
          // DO NOT delete the Goal from the Angular array if the
          // goal is not successfully deleted from the database
          console.log('Error deleting Goal with ID of ' + goalIdToDeleteFromDatabase);
        }
      )
  }

  vm.showGoal = function (goalId) {
    $state.go('show_goal/:goalId', {goalId: goalId});
  }

  // this function can be used to clear the goals form
  function resetForm() {
    vm.newGoalEntry = '';
    vm.newGoalCost = '';
  }

}

module.exports = GoalsController;