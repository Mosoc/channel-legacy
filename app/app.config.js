'use strict';

angular.
  module('channelApp').
    config(function($stateProvider, $urlRouterProvider) {
	
    $urlRouterProvider.otherwise('/');

});