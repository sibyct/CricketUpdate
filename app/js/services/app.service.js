(function() {
  'use strict';
  
  angular
    .module('app')
    .service('appService', appService);

  function appService() {
    return {
      api : function(){
        return "http://cricapi.com/api/"
      }
    }
  }
})();