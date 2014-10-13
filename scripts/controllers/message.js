'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = [];

    // set messages equal to the value returned from MessageService.getMessages
    MessageService.getMessages().then(function (res) {
      console.log(res);
      $scope.messages = res.data.message;
    });





  });




