let goalsTemplate = require(__dirname + '/goals.html');
let goalsController = require(__dirname + '/goals.controller.js');

let GoalsComponent = {
  template: goalsTemplate,
  controller: goalsController
}

angular.module('myResolutionApp').component('goals', GoalsComponent);