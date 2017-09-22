'use strict';

angular.module('movieDetails', [])
  .controller('MovieController', ['$scope', '$http', 'SwapiService',
    function ($scope, $http, SwapiService) {

      $scope.$watch('search', function () {

      });

      $scope.search = "Luke";

      function getPessoa(pessoa) {
        SwapiService.getPessoas(pessoa);
      }


      function update(call) {
        jQuery('#interactive').val(call);
        interactive_call();
      }

      $scope.interactiveCall = function () {
        var content = document.getElementById('interactive').valueOf();
        if (content == '') {
          content = 'people/1/';
        }
        var call_url = 'api/' + content;
        jQuery.ajax({
          dataType: 'json',
          url: call_url,
          context: document.body
        }).complete(function (data) {
          if (data['status'] == 200) {
            var d = jQuery.parseJSON(data['responseText']);
            jQuery('#interactive_output').text(JSON.stringify(d, null, '\t'));
          }
          else if (data['status'] == 404) {
            jQuery('#interactive_output').text(data['status'] + ' ' + data['statusText']);
          }
        });
      }
    }
  ]);
