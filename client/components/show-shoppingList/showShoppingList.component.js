var showShoppingListTemplate = require('./showShoppingList.html')
var showShoppingListController = require('./showShoppingList.controller')

const ShowShoppingListComponent = {
  template: showShoppingListTemplate,
  controller: showShoppingListController
}

angular
  .module('myResolutionApp')
  .component('showShoppingList', ShowShoppingListComponent);