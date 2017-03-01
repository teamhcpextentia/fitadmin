/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//*************MAIN ANGULARJS APPLICATION STARTER FILE FOR akPortfolio APP************//

"use strict";


angular.module('whpmc', ['ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router']);



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
            .state('home.userstat', {
                url: '/userstat',
                views: {
                    "content@": { templateUrl: 'app/main/templates/user/user-statistics.html' }
                },
                controller: 'baseCtrl'
            })
            .state('home.userdetails', {
                url: '/userdetails',
                views: {
                    "content@": { templateUrl: 'app/main/templates/user/user-details.html' }
                },
                controller: 'baseCtrl'
            })
            .state('home.eventstat', {
                url: '/eventstat',
                views: {
                    "content@": { templateUrl: 'app/main/templates/events/event-statistics.html', controller: 'baseCtrl' }
                }

            })
            .state('home.createevent', {
                url: '/create-event',
                views: {
                    "content@": { templateUrl: 'app/main/templates/events/create-event.html', controller: 'eventCtrl' }
                }

            })
            .state('home.eventhistory', {
                url: '/event-history',
                views: {
                    "content@": { templateUrl: 'app/main/templates/events/event-history.html' }
                },
                controller: 'baseCtrl'
            });

        $urlRouterProvider.otherwise('/');


        //    $stateProvider
        //    
        //    .state('personal', {
        //      url: "/personal",
        //      templateUrl: "templates/personal.html",
        //      controller:'personalCtrl'
        //    })
        //    
        //    .state('team', {
        //      url: "/team",
        //      templateUrl: "templates/team.html",
        //      controller:'personalCtrl'
        //    })
        //    
        //    .state('bu', {
        //      url: "/bu",
        //      templateUrl: "templates/business-unit.html",
        //      controller:'personalCtrl'
        //    })
        //    
        //    .state('challenge', {
        //      url: "/challenge",
        //      templateUrl: "templates/challenge.html",
        //      controller:'personalCtrl'
        //    })
        //    
        //    
        //    .state('manageChallenge', {
        //      url: "/manage-challenge",
        //      templateUrl: "templates/manage-challenge.html",
        //      controller:'mainCtrl'
        //    })
        //    
        //    .state('manageTeam', {
        //      url: "/manage-team",
        //      templateUrl: "templates/manage-team.html",
        //      controller:'mainCtrl'
        //    })
        //    
        //    .state('registerDevice', {
        //      url: "/register-device",
        //      templateUrl: "templates/register-device.html",
        //      controller:'deviceManagerCtrl'
        //    })
        //    
        //    .state('switchDevice', {
        //      url: "/switch-device",
        //      templateUrl: "templates/switch-device.html",
        //      controller:'deviceManagerCtrl'
        //    })
        //    
        //    .state('OAUTHcallback', {
        //      url: "/oAuth-callback",
        //      templateUrl: "templates/oAuth-callback.html",
        //      controller:'OAuthCallbackCtrl'
        //    });
        //    
        //    
        //    
        //    /*$stateProvider
        //      .state('home',{
        //        url: "/home",
        //        views: {
        //          'leaderboard': {
        //            templateUrl: 'templates/home.html',
        //            controller: 'mainCtrl'
        //          },
        //           'badges': {
        //            templateUrl: 'templates/home.html',
        //            controller: 'mainCtrl'
        //          }
        //         
        //        }
        //      });*/
        //    
        //    $urlRouterProvider.otherwise("/switch-device");

        /*$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');*/


    }
]);