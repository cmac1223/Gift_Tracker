ListsService.$inject = ['$http']

// makes https calls for the shoppingList controller
function ListsService($http) {
  var self = this;
  self.getAllLists = function() {
    return $http.get('/lists');
  }
  self.addNewList = function (newList){
    return $http.post('/lists', newList)
  }
  self.getSingleListById = function (listIdToShow) {
    return $http.get('lists/' + listIdToShow)
  }
  self.updateSingleList = function (listToUpdate) {
    return $http.patch('lists/', listToUpdate)
  }
  self.deleteIdFromDatabase = function (listIdToDeleteFromDatabase) {
    return $http.delete('lists/' + listIdToDeleteFromDatabase)
  }
}
angular
  .module('myResolutionApp')
  .service('ListsService', ListsService)