'use strict';

/**
 * @ngdoc function
 * @name zenyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zenyApp
 */
angular.module('zenyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
