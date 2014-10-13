'use strict';

angular.module('chattyApp')
  .service('MessageService', function MessageService($http, $q) {
    return {
      getMessages: function () {
        var deferred = $q.defer();
        $http({
          method: 'GET',
          url: 'http://localhost:8021'
        }).then(function (res) {
          deferred.resolve(res);
        });
        return deferred.promise;
      }
    }
  });
