GoalController.$inject = ['$http', '$state', '$stateParams', 'GoalsService', '$scope', ];

function GoalController($http, $state, $stateParams, GoalsService, $scope) {
  let vm = this;
  let listIdForGoal = $stateParams.listId;
  
  vm.listId = $stateParams.listId;

  /*
  We will run this function the first time we load our component.
  We can use an 'initialize' function to pre-load some data from the DB
  */

  function initialize() {
    getAllGoalByListId();
  }

  initialize();

  // this function grabs all of the goals from the database
  // via an AJAX call
  console.log('>+++++<>')
  function getAllGoalByListId() {
    GoalsService.getAllGoalByListId(listIdForGoal)
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
  vm.addNewGoal = function (){

    // the new Goal object will be created by binding to the form inputs
    const newGoal = {
      entry: vm.newGoalEntry,
      cost: vm.newGoalCost
    };


    // Make an ajax call to save the new Goal to the databse:
    GoalsService.addNewGoal(listIdForGoal, newGoal)
      .then(
        function success(response) {
          // only push to the goalEntries array if the ajax call is successful
          const newGoal = response.data;
          // vm.goalEntries.push(newGoal);
          
          //after a new Goal is added re-populate the page
          getAllGoalByListId()
          resetForm();

        },
        function failure(response) {
          // if the http call is not successful, log the error
          //DO NOT clear the form
          // DO NOT push the new object to the 
          console.log('Error saving new Goal to database!');
        });
    }
    
    // function that opens the goal
    vm.openGoal = function (goalId) {
      $state.go('showGoal', 
      {
        listId: listIdForGoal,
        goalId: goalId
      });
      console.log('this is listId ' + listId);
      console.log('this is goalId ' + goalId);
    }

  //   vm.showGoal = function (goalId) {
  //     $state.go('showGoal', { goalId: goalId });
  // }
    
  // delete the goal
  vm.deleteGoal = function (goalIdToDeleteFromDatabase) {
    let listIdToDeleteFormDatabase = $stateParams.listId;
    console.log('this is goalIdToDeleteFromDatabase ' + goalIdToDeleteFromDatabase);
    GoalsService.deleteGoalFromDatabase(listIdToDeleteFormDatabase, goalIdToDeleteFromDatabase)
      .then(
        function success(response) {
          getAllGoalByListId();
          console.log('goal deleted from database!')
        },
        function failure(response) {
         console.log('this is a failure')
         console.log(listIdToDeleteFormDatabase)
         console.log('this is goalIdToDeleteFromDatabase' + goalIdToDeleteFromDatabase)
        }
      )
  }


  vm.showGoal = function (goalId) {
    $state.go('showGoal', {goalId: goalId});
  }

  // this function can be used to clear the goals form
  function resetForm() {
    vm.newGoalEntry = '';
    vm.newGoalCost = '';
  }

  vm.totalGoals = function () {
    if (vm.goalEntries) {
      let totalGoals = vm.goalEntries.goal.reduce(function (totalGoals, goalEntry) {
        return totalGoals + goalEntry.cost;
      }, 0)
      return totalGoals;
    }
  }

  

}

module.exports = GoalController;