angular.module("app").factory('addjobsService', ['$http', function ($http) {

  var service = {

    jobPost: function (data,success, error) {
      var headers = {
        'Content-Type': 'application/json',
        "auth_token": JSON.parse(localStorage.todos).auth_token
      }
      $http.post("http://10.91.17.123:4000/auth/jobpost", data, { headers: headers })
        .then(success, error);

    }
  }
  return service;

}]);