angular.module('whpmc').controller('eventCtrl', ['$scope', 'mainService', '$rootScope', '$log', function($scope, mainService, $rootScope, $log) {
    var that = $scope;
    var rootThat = $rootScope;
    that.location_A = '';
    $log.debug("Event controller loaded....");
    that.getLocationA = function() {
        $log.debug(that.details);
    }

}]);