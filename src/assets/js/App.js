'use strict';

angular.module('movieDetails', [])
  .controller('MovieController', ['$scope', '$http', 'SwapiService',
    function ($scope, $http, SwapiService) {

      $scope.$watch('search', function () {
        fetch();
      });

      $scope.search = "Luke";

      function fetch() {
        $http.get("https://swapi.co/api/")
      }
    }
  ]);
