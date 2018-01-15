GoalsService.$inject = ['$http']

function GoalsService($http) {
  var self = this;

  self.getAllGoalByShoppingListId = function (shoppingListIdForGoal){
    return $http.get('/shoppingLists/' + shoppingListIdForGoal)
      .then(function (response) {
        return response;
      });
  };

  self.addNewGoal = function (shoppingListIdForGoal, newGoal){
    return $http.post('/shoppingLists/' + '/goals/', newGoal);
  }
  
  // self.getAllGoalsFromDatabase = function () {
  //   return $http.get('/goals');
  // }

  // self.getSingleGoalById = function (goalIdToShow) {
  //   return $http.get('goals/' + goalIdToShow);
  // }

  // self.addNewGoalToDatabase = function (newGoal) {
  //   return $http.post('goals/', newGoal);
  // }

  // self.deleteIdFromDatabase = function (goalIdToDeleteFromDatabase) {
  //   return $http.delete('goals/' + goalIdToDeleteFromDatabase);
  // }

  // self.updateSingleGoal = function (goalToUpdate) {
  //   return $http.patch('goals/', goalToUpdate);
  // }

};

angular
  .module('myResolutionApp')
  .service('GoalsService', GoalsService);