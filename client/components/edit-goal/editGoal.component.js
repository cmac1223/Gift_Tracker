const editGoalTemplate = require('./editGoal.html')
const editGoalController = require('./editGoal.controller')

const EditGoalComponent = {
  template: editGoalTemplate,
  controller: editGoalController
}

angular
  .module('myResolutionApp')
  .component('editGoal', EditGoalComponent);