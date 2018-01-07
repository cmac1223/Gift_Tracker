ShoppingListController.$inject = ['$http', '$state', '$state', '$stateParams', 'ShoppingListsService.js', '$scope'];

function ShoppingListController($http, $state, $stateParams, ShoppingListsService, $scope) {

  let vm = this;
  // this is what runs as the page loads
  function initialize() {
    getAllShoppingLists();
  }
  initialize();
  // get all shoppinglists to render on the page
  function getAllShoppingLists(){
    ShoppingListsService.getAllShoppingLists()
      .then(
        function success(response){
          // if the call is successful, return the list if shoppingLists
          vm.shoppingListEntries = response.data;
        },
        function failure(response){
          console.log('Error retrieving Shopping List Entries from database!');
        }
      );
  }
  // This function handles our form submission.
  // add a new shoppinglist
  vm.addNewShoppingList = function (){

    // the new ShoppingList object will be created by binding to the form inputs
    const newShoppingList = {
      title: vm.newShoppingList
    };
    // add a new shoppingList
    ShoppingListsService.addNewShoppingList(newShoppingList)
      .then(
        function success(response) {
          console.log('shoppingList saved')
          // only push to the shoppingListEntries array if the ajax call is successful
          const newShoppingList = response.data;
          vm.shoppingListEntries.push(newShoppingList);
          // then reset the form so we can submit more shoppingLists
          resetForm();
        },
        function failure(response){

          console.log('Error saving new Shopping List to database!');
        }
      );

      function resetForm() {
        vm.newShoppingListTitle = '';
      }
      resetForm();
  };
  // renders the show shoppingList page on click
  vm.showShoppingList = function (shoppingListId){
    $state.go('showShoppingLists', { shoppingListsId: shoppingListsId});
  }
}

module.exports = ShoppingListController;