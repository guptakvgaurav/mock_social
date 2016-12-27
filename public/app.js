/**
 * Created by ttn on 28/12/16.
 */
angular.module('mockSocial', [ 'ui.router', 'ui.bootstrap'])
    .config(
        [          '$stateProvider', '$urlRouterProvider',
            function ($stateProvider,   $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state("home", {
                        url: "/",
                        templateUrl: './views/home.html',
                        controller: 'homeController'
                    })
                    .state('about', {
                        url: '/about',
                        template: ''
                    })
                    .state('xss', {
                        url: '/tutorials/xss',
                        template: '<h1> Welcome to Xss tutorials</h1>',
                        controller: 'xssController'
                    })
                    .state('csrf', {
                        url: '/tutorials/csrf',
                        template: '<h1> Welcome to csrf tutorials</h1>',
                        controller: 'csrfController'
                    })
            }
        ]
    );