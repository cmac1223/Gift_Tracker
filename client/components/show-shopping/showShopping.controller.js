ShowShoppingController.$inject = ['$state', '$stateParams', 'ShoppingListsService']

function ShowShoppingController($state, $stateParams, ShoppingListsService){

  var vm = this;

  // what runs when the page loads
  function initialize(){
    let shoppingListIdToShow = $stateParams.shoppingId;

    ShoppingListsService.getSingleShoppingListById(shoppingListIdToShow)
      .then(
      function success(response) {
        vm.shoppingListEntry = response.data;
        console.log(vm.shoppingListEntry);
      },

      function failure(response){
        console.log('Failed to retrieve information for ShoppingList with ID of ' + shoppingListIdToShow)
      }
      )
  }

  initialize();

  // update shoppingList
  
  // this is the function that runs when you click on the show shopping list button
  vm.showGoal = function (shoppingListIdForGoal){
    $state.go('goalIndex', { shoppingId: shoppingListIdForGoal });
  }
}

module.exports = ShowShoppingController;