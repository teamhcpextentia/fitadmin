angular.module('whpmc').controller('eventCtrl', ['$scope', 'mainService', '$rootScope', '$log', 'NgMap', function($scope, mainService, $rootScope, $log, NgMap) {
    var that = $scope;
    // var rootThat = $rootScope;
    that.createEventForm = {};
    //that.origin;
    //that.destination;
    $log.debug("Event controller loaded....");


    that.getLocationA = function() {
        $log.debug("Origin Location : ", that.origin_location);
        $log.debug("Destination Location : ", that.destination_location);


        that.createEventForm.origin_lat = that.origin_location[3],
            that.createEventForm.origin_lng = that.origin_location[4],
            that.createEventForm.destination_lat = that.destination_location[3],
            that.createEventForm.destination_lng = that.destination_location[4]

        //$log.debug("Whole Info : ", that.createEventForm);

    }

    NgMap.getMap().then(function(map) {
        $log.debug(map.getCenter());
        $log.debug('markers', map.markers);
        $log.debug('shapes', map.shapes);
    });

}]);