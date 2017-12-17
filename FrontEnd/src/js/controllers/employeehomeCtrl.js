angular.module("app").controller('employeehomeCtrl', ['$scope', '$state', function ($scope, $state) {
//alert('in');
//        alert("employeehomeCtrl");.
        $scope.add_proj = function () {
            debugger;
            $state.go("app.components.add_job");

        };

        $scope.det_proj = function () {
            debugger;
            $state.go("app.components.project_detail");

        };

    }]);