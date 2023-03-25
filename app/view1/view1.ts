'use strict';

type Hello = "Hello";

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {
    const x: Hello = "Hello";
  console.log("it's working eh? or is it? hm", x);
}]);
