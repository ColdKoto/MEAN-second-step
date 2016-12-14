const app = angular.module('strangerApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'indexController',
            controllerAs: 'iC'
        })
        .when('/weapon', {
            templateUrl: 'partials/weapon.html',
            controller: 'weaponController',
            controllerAs: 'wC'
        })
        .otherwise({
            redirectTo: '/'
        })
});
