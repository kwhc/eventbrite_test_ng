'use strict';

/**
 * @ngdoc function
 * @name eventbriteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the eventbriteApp
 */
angular.module('eventbriteApp')
  .controller('AboutCtrl', function ($scope,$sce,$timeout) {
    $scope.eventId = '15832698026';

    $scope.eventCalendarUrl = 'http://www.eventbrite.com/calendar-widget?eid=' + $scope.eventId;
    $scope.eventPagePreviewUrl = 'http://www.eventbrite.com/event/'+$scope.eventId+'?ref=eweb';
    $scope.ticketPreviewUrl = 'http://www.eventbrite.com/tickets-external?eid=' + $scope.eventId + '&ref=etckt&v=2';
    $scope.ticketPreviewResource = $sce.trustAsResourceUrl($scope.ticketPreviewUrl);
    $scope.eventpagePreviewResource = $sce.trustAsResourceUrl($scope.eventPagePreviewUrl);
    $scope.eventCalendarResource = $sce.trustAsResourceUrl($scope.eventCalendarUrl);

    //$timeout(function () { console.log(window.frames.foo); }, 1000);
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
