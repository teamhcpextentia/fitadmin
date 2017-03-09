/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//*************MAIN ANGULARJS APPLICATION STARTER FILE FOR akPortfolio APP************//

"use strict";


angular.module('whpmc', ['ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ngMap']);



angular.module('whpmc').config(['$stateProvider', '$urlRouterProvider', '$logProvider',

    function($stateProvider, $urlRouterProvider, $logProvider) {
        $logProvider.debugEnabled(true);

        $stateProvider
            .state('home', {
                url: '',
                views: {
                    "content@": { templateUrl: 'app/main/templates/dashboard-statistics.html' }
                },
                controller: 'baseCtrl'
            })
            .state('home.register', {
                url: '/register',
                views: {
                    "content@": { templateUrl: 'app/main/templates/corporate/register.html' }
                },
                controller: 'registerCtrl'
            })
            .state('home.designer', {
                url: '/designer',
                views: {
                    "content@": { templateUrl: 'app/main/templates/configuration/theme-designer.html' }
                },
                controller: 'designerCtrl'
            });

        $urlRouterProvider.otherwise('/');


    }
]);