/**
 * this is a style controller which is responsible for dynamic theme generation
 * **/

"use strict";

angular.module('whpmc').controller('styleCtrl', ['$scope', 'mainService', '$rootScope', '$log', function($scope, mainService, $rootScope, $log) {
    var that = $scope;
    var rootThat = $rootScope;
    that.fnColor = '#ccc333';
    rootThat.name = 'Test';
    that.getTestMessage = function() {
        mainService.showHideWaitingLoader(true);
        var url = 'http://www.anithedesigner.in/backoffice/index.php';
        var data = {};

        mainService.doServiceCall(url, 'GET', data, function(response) {
            $log.debug("Response ===>> ", response);
            that.message = response.message;
            mainService.showHideWaitingLoader(false);
        }, function(err) {
            $log.debug("Response in err ", err);
        });

    }

}]);