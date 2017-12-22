GoalsService.$inject = ['$http']

function GoalsService($http) {
  var self = this;
  
  self.getAllGoalsFromDatabase = function () {
    return $http.get('goals/');
  }

  self.getSingleGoalById = function (goalIdToShow) {
    return $http.get('goals/' + goalIdToShow);
  }

  self.addNewGoalToDatabase = function (newGoal) {
    return $http.post('goals/', newGoal);
  }

};

angular
  .module('myResolutionApp')
  .service('GoalsService', GoalsService);