angular.module("app").controller('addjobCtrl', ['$scope', '$state', '$http', 'addjobsService', function ($scope, $state, $http, addjobsService) {
  $scope.addJobs = {};
  $scope.postJobs = function (addJobs) {
    debugger;
    addJobs.appstatus = 2;
    addjobsService.jobPost(addJobs, function () {
      $scope.addJobs = {};
    }, function () {

    });
    //$http({
    //  'method':'GET',
    //  'url':'',
    //  'data':'',
    //  'header':{'content-type':'application/JSON'}
    //}).

  }
}]);