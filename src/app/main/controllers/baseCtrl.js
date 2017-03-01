/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//*******This a Base controller **************//

"use strict";

angular.module('whpmc').controller('baseCtrl', ['$scope', 'mainService', '$rootScope', '$log', function($scope, mainService, $rootScope, $log) {
    var that = $scope;
    var rootThat = $rootScope;
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