(function() {
    'use strict';

    angular
        .module('jhp2App')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('items', {
            parent: 'app',
            url: '/',
            data: {
                authorities: []
            },
            views: {
                'content@': {
                    templateUrl: 'app/items/item.html',
                    controller: 'ItemsController',
                    controllerAs: 'vm'
                }
            }
        });
    }
})();
