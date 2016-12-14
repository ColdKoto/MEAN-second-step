const app = angular.module('testApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/index.html',
            controller: 'indexController',
            controllerAs: 'iC'
        })
        .when('/next', {
            templateUrl: 'partials/next.html',
            controller: 'nextController',
            controllerAs: 'nC'
        })
        .otherwise({
            redirectTo: '/'
        })
});
