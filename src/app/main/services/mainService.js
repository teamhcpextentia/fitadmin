/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
angular.module('whpmc').factory('mainService', function($http, $log) {
    return {

        doServiceCall: function(url, method, data, successCB, errorCB) {
            $http({
                method: method,
                url: url,
                data: data
            }).then(function successCallback(response) {
                $log.debug("Success Response in " + method + "==>>", response);

                successCB(response.data);

            }, function errorCallback(response) {
                $log.debug("Response in err ", response);
                errorCB(response.data);

            });
        },

        parseResponse: function(resp) {
            var params = decodeURIComponent(resp).split('&'),
                data = {};

            params.forEach(function(param) {
                var splitter = param.split('=');
                data[splitter[0]] = splitter[1];
            });

            return data;
        },

        showHideWaitingLoader: function(flag) {
            if (flag == true) {
                $('.loading').show();
            } else {
                $('.loading').hide();
            }
        }

    }

});