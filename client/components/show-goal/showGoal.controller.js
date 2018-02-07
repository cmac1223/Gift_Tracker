ShowGoalController.$inject = ['$state', '$stateParams', 'GoalsService']

function ShowGoalController($state, $stateParams, GoalsService){

  var vm = this;
  // let goalIdToShow = $stateParams.goalId;
  
  function initialize(){
    const goalIdToShow = $stateParams.goalId;
    let listIdForGoal = $stateParams.listId;
    console.log('goalIdToShow  ' + goalIdToShow)
    console.log('listIdForGoal ' + listIdForGoal);
    // getSingleGoalById();
    
    
      GoalsService.getSingleGoalById(listIdForGoal, goalIdToShow)
      .then(
        function success(response) {
          vm.goalEntry = response.data;
          console.log('>+++++<>>')
          console.log(response.data)
        },
        function failure(response){
          console.log('Failed to retrieve information for Credit with ID of ' + goalIdToShow)
          
        });
      
    }
    initialize();
    
  vm.editGoalEntry = function(goalEntryId) {
    $state.go('edit_goal/:goalId', {goalId: goalEntryId});
  }
}

// function getAllStudyGuidesByUserId() {
//   StudyGuidesService.getAllStudyGuidesByUserId(userIdForStudyGuide)
//       .then(
//       function success(response) {
//           // if the call is successful, return the list of study guides
//           vm.studyGuideList = response.data;
//           // console.log('this is the studyGuideList' + studyGuideList)
//       },
//       function failure(response) {
//           console.log('Error retrieving User Entries from database!');
//       });
// }


module.exports = ShowGoalController;