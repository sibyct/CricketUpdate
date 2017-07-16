(function() {
  'use strict';

  angular
    .module('app')
    .factory('servicesFactory', servicesFactory);
  
  servicesFactory.$inject = ['$resource','appService'];

  function servicesFactory($resource) {
    return $resource('http://cricapi.com/api/',{
      matches: {
        method: 'get', 
        url: 'http://cricapi.com/api/' + 'matches'
      },
      oldMatch:{
        method:'get',
        url: 'http://cricapi.com/api/' + 'cricket'
      },
      starPlayer:{
        method: 'get',
        url: 'http://cricapi.com/api/' + 'playerStats'
      }
    });
  }
})();