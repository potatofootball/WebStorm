/**
 * Created by xiexianggui on 2017/2/16.
*/
angular.module('clock', [])
    .controller('MyController', function ($scope, $timeout, $interval) {
        $scope.myClock = {now : new Date().toLocaleString()};
        $scope.updateClock = function() {
            $scope.myClock.now = new Date().toLocaleString();
            // $timeout($scope.updateClock, 1000);//setTimeout只执行一次，需要回调
        };
        // $scope.updateClock();
        $interval($scope.updateClock, 1000);
    });