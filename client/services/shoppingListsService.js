ShoppingListsService.$inject = ['$http']

// makes https calls for the shoppingList controller
function ShoppingListsService($http) {
  var self = this;
  self.getAllShoppingLists = function() {
    return $http.get('/shoppingLists');
  }
  self.addNewShoppingList = function (newShoppingList){
    return $http.post('/shoppingLists', newShoppingList)
  }
  self.getSingleShoppingListById = function (shoppingListIdToShow) {
    return $http.get('shoppingLists/', shoppingListIdToShow)
  }
  self.updateSingleShoppingList = function (shoppingListToUpdate) {
    return $http.patch('shoppingLists/', shoppingListToUpdate)
  }
  self.deleteIdFromDatabase = function (shoppingListIdToDeleteFromDatabase) {
    return $http.delete('shoppingLists/', shoppingListIdToDeleteFromDatabase)
  }
}
angular
  .module('myResolutionApp')
  .service('ShoppingListsService', ShoppingListsService)