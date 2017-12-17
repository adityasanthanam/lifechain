angular.module("app").controller('labourCtrl', ['$scope', '$state', function ($scope, $state) {
//alert('in');
//        alert("labourCtrl");
  $scope.role=JSON.parse(localStorage.getItem('todos'));
  
  		
        $scope.go = function () {
            debugger;
            $state.go("app.components.employee_home");

        };

    }]);