var jsonApp = angular.module('jsonApp', []);
jsonApp.controller('jsonController', function($scope, $http) {

    $http.get('js/data.json').then(function(response) {
        $scope.list = response.data;
    });
});