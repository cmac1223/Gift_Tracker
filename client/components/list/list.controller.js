ListController.$inject = ['$http',  '$state', '$stateParams', 'ListsService', '$scope'];

function ListController($http, $state, $stateParams, ListsService, $scope) {

  let vm = this;
  // this is what runs as the page loads
  function initialize() {
    getAllLists();
  }
  initialize();
  // get all lists to render on the page
  function getAllLists(){
    ListsService.getAllLists()
      .then(
        function success(response){
          // if the call is successful, return the list if Lists
          vm.listEntries = response.data;
          console.log(vm.listEntries);
        },
        function failure(response){
          console.log('Error retrieving  List Entries from database!');
        }
      );
  }
  // This function handles our form submission.
  // add a new shoppinglist
  vm.addNewList = function (){

    // the new ShoppingList object will be created by binding to the form inputs
    const newList = {
      title: vm.newListTitle
    };
    // add a new List
    ListsService.addNewList(newList)
      .then(
        function success(response) {
          console.log('List saved')
          // only push to the ListEntries array if the ajax call is successful
          const newList = response.data;
          vm.listEntries.push(newList);
          // then reset the form so we can submit more Lists
          resetForm();
        },
        function failure(response){

          console.log('Error saving new  List to database!');
        }
      );

      function resetForm() {
        vm.newListTitle = '';
      }
      resetForm();
  };
  // renders the show List page on click
  vm.showList = function (listId){
    $state.go('showList', { listId: listId});
  }
}

module.exports = ListController;