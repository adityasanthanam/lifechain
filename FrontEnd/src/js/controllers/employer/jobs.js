angular
.module('app')
.controller('jobscontrol', ['$scope', '$stateParams', function ($scope, $stateParams) {

  $scope.projectID = $stateParams.projectID;
  $scope.projectList = [
       {
         id: "JB12",
         applicants: 500,
         position: 28
       },
       {
         id: "JB145",
         applicants: 200,
         position: 12
       },
       {
         id: "JB14",
         applicants: 10,
         position: 33
       },
       {
         id: "JB156",
         applicants: 120,
         position: 56
       }
  ];
  if ($scope.projectID) {
    $scope.projectList.forEach(function (pl) {
      if (pl.id === $scope.projectID) {
        $scope.currentProject = pl;
      }
    });
  }
  $scope.labels = ['0', '100', '200', '300', '500', '600', '2000', '900'];
  $scope.series = ['Series A'];

  $scope.data = [
    [0, 65, 59, 80, 81, 56, 55, 40]
  ];

  $scope.colors = [{
    backgroundColor: brandPrimary,
    borderColor: 'rgba(255,255,255,.55)',
  }];
  $scope.liveprojects = 3;
}]);