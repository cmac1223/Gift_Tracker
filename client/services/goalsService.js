GoalsService.$inject = ['$http']

function GoalsService($http) {
  var self = this;
  
  self.getAllGoalsFromDatabase = function () {
    return $http.get('goals/');
  }
}

angular
  .module('myResolutionApp')
  .service('GoalsService', GoalsService);