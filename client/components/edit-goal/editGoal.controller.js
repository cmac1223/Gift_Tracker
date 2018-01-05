EditGoalController.$inject = ['$state', '$stateParams', 'GoalsService'];

function EditGoalController($state, $stateParams, GoalsService) {
  
  var vm = this;

  function initialize(){
    const goalEntryId = $stateParams.goalId;

    GoalsService.getSingleGoalById (goalEntryId).then(
      function success(response) {
        vm.goalToUpdate = response.data;
      },
      function failure(response) {
        console.log('Could not retrieve Goal with ID of ' + goalEntryId);
      }
    )
  }
  initialize();

  vm.updateGoalInformation = function(){
    GoalsService.updateSingleGoal(
      vm.goalToUpdate
    ).then(
      function success(response) {
        // redirect to the individual credit page when successfully updated
        $state.go('show_goal/:goalId', { goalId: vm.goalToUpdate._id });
      },
      function failure(response){
        console.log('Failed to updated Goal with ID of ' + goalEntryId);
      }
    )
  }
}

module.exports = EditGoalController;