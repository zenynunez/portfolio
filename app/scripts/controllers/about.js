'use strict';

/**
 * @ngdoc function
 * @name zenyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the zenyApp
 */
angular.module('zenyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
