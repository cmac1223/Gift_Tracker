GoalsService.$inject = ['$http']

function GoalsService($http) {
  var self = this;

  self.getAllGoalByListId = function (listIdForGoal){
    return $http.get('/lists/' + listIdForGoal)
      .then(function (response) {
        return response;
      });
  };

  self.addNewGoal = function (listIdForGoal, newGoal){
    return $http.post('/lists/' + listIdForGoal + '/goal/' , newGoal);
  }
  
  // self.getAllGoalsFromDatabase = function () {
  //   return $http.get('/goals');
  // }

  self.getSingleGoalById = function (listIdForGoal, goalIdToShow) {
    return $http.get('/lists/' + listIdForGoal + '/goal/' + goalIdToShow);
  }

  // self.addNewGoalToDatabase = function (newGoal) {
  //   return $http.post('goals/', newGoal);
  // }

  self.deleteGoalFromDatabase = function (listIdToDeleteFromDatabase, goalIdToDeleteFromDatabase) {
    return $http.delete('/lists/' + listIdToDeleteFromDatabase +  '/goal/' + goalIdToDeleteFromDatabase);
  }
  

  // self.updateSingleGoal = function (goalToUpdate) {
  //   return $http.patch('goals/', goalToUpdate);
  // }

};

angular
  .module('myResolutionApp')
  .service('GoalsService', GoalsService);