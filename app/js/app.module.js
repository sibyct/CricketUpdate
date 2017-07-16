/**
 * @author ctola
 */
(function() {
  'use strict';
  
  angular
    .module('app',[
        'ui.materialize',
        'ui.router',
        'ngResource'
    ])
    .constant(_,window._)
    .run(function($rootScope){ 
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if(fromState.url !== toState.url){
          if(localStorage.getItem('user') === "")
            location.href = location.href.split('/')[0] +'/login.html';
      }
    });
  });
})();
