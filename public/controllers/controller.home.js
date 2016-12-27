/**
 * Created by ttn on 28/12/16.
 */
angular.module('mockSocial')
    .controller('homeController', function ($scope) {
        var xss = {
            title: 'Xss - Cross Site Scripting',
            description: 'Wikipedia says bullshit. Let do a demo.',
            demoState: 'xss',
            isCollapsed: true
        };
        var csrf = {
            title: 'CSRF - Cross Site Request Forgery',
            description: 'Wikipedia says bullshit. Let do a demo.',
            demoState: 'csrf',
            isCollapsed: true
        };

        $scope.items = [xss, csrf];
    });
