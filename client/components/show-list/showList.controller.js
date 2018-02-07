ShowListController.$inject = ['$state', '$stateParams', 'ListsService']

function ShowListController($state, $stateParams, ListsService){

  var vm = this;

  // what runs when the page loads
  function initialize(){
    let listIdToShow = $stateParams.listId;

    ListsService.getSingleListById(listIdToShow)
      .then(
      function success(response) {
        vm.listEntry = response.data;
        console.log(vm.listEntry);
        console.log('this is listEntry  ' + vm.listEntry);
        console.log(  'this is listIdToShow   ' + listIdToShow);
      
      },

      function failure(response){
        console.log('Failed to retrieve information for List with ID of ' + listIdToShow)
      }
      )
  }

  initialize();

  // delete list
  vm.deleteList = function (listIdToDeleteFromDatabase) {
    let listIdToDeleteFormDatabase = $stateParams.listId;
    console.log('delete list was called')
    ListsService.deleteIdFromDatabase(listIdToDeleteFromDatabase)
      .then(
        function success(response){
          var listIndexToDelete = vm.listEntries.indexOf(listIdToDeleteFromDatabase);
          // only delete the List from the Angular array 
          // if it was successfully deleted from the database
          vm.listEntries.splice(listIndexToDelete, 1);
        },
        function failure(response) {
          //Do Not delete the list from the Angular array 
          //if the list is not successfully deleted form the database
          console.log('Error deleting List with ID of ' + listIdToDeleteFromDatabase);
        }
      )
  }

  // update shoppingList
  
  // this is the function that runs when you click on the show shopping list button
  vm.showGoal = function (listIdForGoal){
    $state.go('goalIndex', { listId: listIdForGoal });
  }

  // console.log('this is listId  ' + listId);
}

module.exports = ShowListController;


