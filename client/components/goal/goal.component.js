let goalTemplate = require(__dirname + '/goal.html');
let goalController = require(__dirname + '/goal.controller.js');

let GoalComponent = {
  template: goalTemplate,
  controller: goalController
}

angular.module('myResolutionApp').component('goal', GoalComponent);