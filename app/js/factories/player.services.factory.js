(function() {
  'use strict';

  angular
    .module('app')
    .factory('playerServicesFactory', servicesFactory);
  
  servicesFactory.$inject = ['$resource','appService'];

  function servicesFactory($resource,appService) {
    return $resource(appService.api()+ 'fantasySummary'+ '/:playerId',{playerId:'@id'});
  }
})();