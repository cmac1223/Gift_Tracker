var showShoppingTemplate = require('./showShopping.html')
var showShoppingController = require('./showShopping.controller')

const ShowShoppingComponent = {
  template: showShoppingTemplate,
  controller: showShoppingController
}

angular
  .module('myResolutionApp')
  .component('showShopping', ShowShoppingComponent);