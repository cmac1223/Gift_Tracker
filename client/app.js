require('@uirouter/angularjs');
require('angular-messages');
const angular = require('angular');

angular.module('myResolutionApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('goals', {
      url: '/goals',
      template: '<goals></goals>'
    })
    .state('show_goal/:goalId', {
      url: '/show_goal/:goalId',
      params: [ 'goalId' ],
      template: '<show-goal></show-goal>'
    })
  $urlRouterProvider.otherwise('/');  
}