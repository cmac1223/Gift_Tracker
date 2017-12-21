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

  function initialize(){
    getAllGoalsFromDatabase();
  }

  initialize();

  // this function grabs all of the goals from the database
  // via an AJAX call
  function getAllGoalsFromDatabase(){
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

}

module.exports = GoalsController;