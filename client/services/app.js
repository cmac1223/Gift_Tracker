require('angular-ui-router');
require('angular-messages');
const angular = require('angular');

angular.module('myResolutionApp', ['ui.router', 'ngMessages']).config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];