var showListTemplate = require('./showList.html')
var showListController = require('./showList.controller')

const ShowListComponent = {
  template: showListTemplate,
  controller: showListController
}

angular
  .module('myResolutionApp')
  .component('showList', ShowListComponent);