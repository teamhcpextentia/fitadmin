/**
 * this is a theme designer controller which is responsible for dynamic theme generation
 * based on registered corporate
 * **/

"use strict";

angular.module('whpmc').controller('designerCtrl', ['$scope', 'mainService', '$rootScope', '$log', function($scope, mainService, $rootScope, $log) {
    var that = $scope;
    
    that.message = "Hi I am theme designer controller !!";

}]);