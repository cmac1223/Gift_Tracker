let listTemplate = require(__dirname + '/list.html');
let listController = require(__dirname + '/list.controller.js');

let ListComponent = {
  template: listTemplate,
  controller: listController
}

angular.module('myResolutionApp').component('list', ListComponent);