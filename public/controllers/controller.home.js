/**
 * Created by ttn on 28/12/16.
 */
angular.module('mockSocial')
    .controller('homeController', function ($scope, Tags) {
        //todo: should be constant.
        var xss = {
            title: 'Xss - Cross Site Scripting',
            description: 'Wikipedia says bullshit. Let do a demo.',
            demoState: 'xss',
            tags: [Tags.WebSecurity, Tags.Xss, Tags.CrossSiteScripting],
            isCollapsed: true
        };
        var csrf = {
            title: 'CSRF - Cross Site Request Forgery',
            description: 'Wikipedia says bullshit. Let do a demo.',
            demoState: 'csrf',
            tags: [Tags.WebSecurity, Tags.Csrf, Tags.CrossSiteRequestForgery],
            isCollapsed: true
        };

        $scope.items = [xss, csrf];
    });
