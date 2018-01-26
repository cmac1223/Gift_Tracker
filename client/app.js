require('@uirouter/angularjs');
require('angular-messages');
const angular = require('angular');

angular.module('myResolutionApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('lists', {
    url: '/lists',
    template: '<list></list>'
  })
  .state('showList', {
    url: '/lists/:listId',
    params: ['listId'],
    template: '<show-list></show-list>'
  })
  .state('goalIndex', {
    url:'/lists/:listId/goal',
    params: ['listId'],
    template: '<goal></goal>'
  })
  .state('showGoal', {
    url: '/lists/:listId/goal/:goalId',
    params: ['goalId'],
    template: '<show-goal></show-goal>'
  })
  .state('edit_goal/:goalId', {
    url: '/edit_goal/:goalId',
    template: '<edit-goal></edit-goal>'
  })
  $urlRouterProvider.otherwise('/lists');  
}

