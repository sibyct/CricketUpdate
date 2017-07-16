(function() {
  'use strict';

  angular
    .module('app')
    .factory('matchServicesFactory', servicesFactory);
  
  servicesFactory.$inject = ['$resource','appService'];

  function servicesFactory($resource,appService) {
    return $resource(appService.api()+ 'fantasySummary'+ '/:matchId',{matchId:'@id'});
  }
})();