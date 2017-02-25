/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//************GLOBAL VARIABLES / OBJECTS *************//

var CONSTANTS = {
    
    //APPLICATION CONSTANTS
    APPNAME : "akPortfolio",
    
    //WEBSERVICE CONSTANTS
    API:{
      BASE_URL: "http://www.anithedesigner.in/backoffice/",
      TEST_WS: "index.php"
    }
    
    
    //OBJECTS
    
    
    //BOOLEANS / VARIABLES / FLAGS
    
};

angular.module('whpmc').constant('CONSTANTS',(function(){
          return CONSTANTS;
    })()
);