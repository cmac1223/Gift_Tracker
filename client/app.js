require('@uirouter/angularjs');
require('angular-messages');
const angular = require('angular');

angular.module('myResolutionApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('shoppingLists', {
    url: '/shoppingLists',
    template: '<shopping-lists></shopping-lists>'
  })
  .state('showShopping', {
    url: '/shoppingLists/:shoppingListId',
    params: ['showId'],
    template: '<show-shopping></show-shopping>'
  })
  .state('goalIndex', {
    url:'/shoppingLists/:shoppingListId/goals',
    params: ['shoppingId'],
    template: '<goals></goals>'
  })
  .state('showGoal', {
    url: '/shoppingLists/:shoppingListId/goals/:goalId',
    params: [ 'goalId' ],
    template: '<show-goal></show-goal>'
  })
  .state('edit_goal/:goalId', {
    url: '/edit_goal/:goalId',
    template: '<edit-goal></edit-goal>'
  })
  $urlRouterProvider.otherwise('/shoppingLists');  
}

