require('@uirouter/angularjs');
require('angular-messages');
const angular = require('angular');

angular.module('myResolutionApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];
function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    // .state('goals', {
    //   url: '/goals',
    //   template: '<goals></goals>'
    // })
    .state('show_goal/:goalId', {
      url: '/show_goal/:goalId',
      params: [ 'goalId' ],
      template: '<show-goal></show-goal>'
    })
    .state('edit_goal/:goalId', {
      url: '/edit_goal/:goalId',
      template: '<edit-goal></edit-goal>'
    })
    .state('shoppingLists', {
      url: '/shoppingLists',
      template: '<shopping-lists></shopping-lists>'
    })
    .state('showShoppingList', {
      url: '/shoppingLists/:shoppingListId',
      params: ['showId'],
      template: '<show-shoppingList></show-shoppinglist>'
    })
    .state('goalIndex', {
      url:'/shoppingLists/:shoppingListId/goals',
      params: ['shoppingListId'],
      template: '<goals></goals>'
    })
  $urlRouterProvider.otherwise('/shoppingLists');  
}