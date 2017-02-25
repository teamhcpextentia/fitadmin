/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//*************MAIN ANGULARJS APPLICATION STARTER FILE FOR akPortfolio APP************//

"use strict";


angular.module('whpmc',['ngCookies', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngRoute']);



angular.module('whpmc').config(['$httpProvider', '$routeProvider',
    function ($httpProvider, $routeProvider) {

      $routeProvider
      .when('/', {
        templateUrl: 'app/main/templates/main.html',
        controller: 'baseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    
    
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
    
   
}]);


 



//bootstrapApplication('whpmc');


/**
* bootstrapApplication : Method for ng-app bootstrap
* @params appName {String}
*
*/
/*function bootstrapApplication(appName) {
    angular.element(document).ready(function () {
        angular.bootstrap(document, [appName]);
    });

}*/
