'use strict';
function config($routeProvider) {

      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
}
config.$inject = ['$routeProvider'];
angular.
  module('phonecatApp').
  config(config);
