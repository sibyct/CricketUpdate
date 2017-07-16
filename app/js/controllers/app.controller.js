//appController
/**
 * @author ctola
 */
(function() {
    angular
        .module('app')
        .controller('AppController', AppController);

    function AppController($scope) {
        //vars
        /* jshint validthis: true */
        $scope.logout = function(){
            localStorage.setItem('user','');
            location.href = location.href.split('/')[0] +'/login.html';
        };  
        var user = localStorage.getItem('user');
        if(user === "")
            location.href = location.href.split('/')[0] +'/login.html';
        else
            $scope.user = JSON.parse(user);   
        }
})();