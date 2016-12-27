/**
 * Created by ttn on 28/12/16.
 */
angular.module('mockSocial')
    .component('listItem', function () {
        return {
            bindings: {
                item: '<'
            },
            template: `

                <hr>
                    <button type="button" class="btn btn-default" ng-click="item.isCollapsed = !item.isCollapsed">
                        {{ item.title }}
                    </button>
                    <button type="button" class="btn btn-success" ui-sref="{{ item.demoState }}"> Demo </button>
                        <hr>
                        <div uib-collapse="item.isCollapsed">
                        <div class="well well-lg">{{ item.description }}</div>
                    </div>
            `
        };
    });
