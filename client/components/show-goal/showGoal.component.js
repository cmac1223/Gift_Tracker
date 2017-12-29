var showGoalTemplate = require('./showGoal.html')
var showGoalController = require('./showGoal.controller')

const ShowGoalComponent = {
  template: showGoalTemplate,
  controller: showGoalController
}

angular
  .module('myResolutionsApp')
  .component('showGoal', ShowGoalComponent);