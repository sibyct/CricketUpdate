/**
 * @author ctola
 */
angular
    .module("app")
    .factory('apiKeyInterceptor', function() {  
        var myInterceptor = {
            request: function(config){
                return config;
            }
        };

        return myInterceptor;
    })
    .config(appConfig)
appConfig.$inject =['$stateProvider', '$urlRouterProvider','$httpProvider'];

function appConfig($stateProvider, $urlRouterProvider,$httpProvider) {
    $httpProvider.interceptors.push('apiKeyInterceptor');
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "views/home.html",
            controller: "HomeController as vm"
        })
        .state('player', {
            url: '/player:id',
            templateUrl: "views/player.html",
            controller: "PlayerController as vm"
        })
        .state('match', {
            url: '/match:id',
            templateUrl: "views/match.html",
            controller: "MatchController as vm"
        })
}