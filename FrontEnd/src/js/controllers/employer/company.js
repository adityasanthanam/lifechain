angular
    .module('app')
    .controller('companycontrol', ['$scope', function ($scope) {
      $scope.projectList = [
        {
          id: "JB12",
          applicants:500
        },
        {
          id: "JB145",
          applicants: 200
        },
        {
          id: "JB14",
          applicants: 10
        },
        {
          id: "JB156",
          applicants: 120
        }
      ]
    }]);