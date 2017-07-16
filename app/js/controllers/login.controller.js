/**
 * @author ctola
 */
(function() {
    angular
        .module('app',[
        'ui.materialize'
    ])
        .controller('LoginController', LoginController);

    function LoginController($scope) {
        //vars
        /* jshint validthis: true */
        debugger;
        var user = localStorage.getItem('user');
        if(user !== "")
            location.href = location.href.replace('/login.html','/');
        $scope.user = {};
        $scope.login = function(){
            localStorage.setItem('user',JSON.stringify($scope.user));
            location.href = location.href.replace('/login.html','/');
        }
        }
})();