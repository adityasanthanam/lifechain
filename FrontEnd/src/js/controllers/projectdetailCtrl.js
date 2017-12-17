angular.module("app").controller('projectdetailCtrl', ['$scope', '$state', '$timeout', function ($scope, $state, $timeout) {

        $scope.save_feedback = function () {
            debugger;
            $state.go("app.components.employee_home");
        };
    }]);