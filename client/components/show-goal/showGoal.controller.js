ShowGoalController.$inject = ['$state', '$stateParams', 'GoalsService']

function ShowGoalController($state, $stateParams, GoalsService){

  var vm = this;

  function initialize(){
    const goalIdToShow = $stateParams.goalId;

    GoalsService.getSingleGoalById(goalIdToShow)
      .then(
        function success(response) {
          vm.goalEntry = response.data;
        },

        function failure(response){
          console.log('Failed to retrieve information for Credit with ID of ' + goalIdToShow)
        }
      )
  }
  initialize();

  vm.editGoalEntry = function(goalEntryId) {
    $state.go('edit_goal/:goalId', {goalId: goalEntryId});
  }
}

module.exports = ShowGoalController;