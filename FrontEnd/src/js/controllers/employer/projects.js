angular
    .module('app')
    .controller('projectcontrol', ['$scope', function ($scope) {
        $scope.labels = ['Construction Workers', 'In-Store Sales Workers', 'Drivers','Plumbers'];
        $scope.data = [3000, 5000, 1000,2000];
        $scope.liveprojects = 3;
        $scope.projectList = [
          {
            id: "JB123656",
            name: "ABC",
            type: "Construction",
            count: 20
          },
          {
            id: "JB256482",
            name: "CBA",
            type: "Civil",
            count: 12
          }]

        $scope.selectProject = function (pl) {
          $scope.selectedProject = pl;
        }
    }]);