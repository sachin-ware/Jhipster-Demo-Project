(function() {
    'use strict';

    angular
        .module('jhp2App')
        .controller('ItemController', ItemController);

    ItemController.$inject = ['$scope', '$state', 'Item', 'ItemSearch'];

    function ItemController ($scope, $state, Item, ItemSearch) {
        var vm = this;
        
        vm.items = [];
        vm.search = search;
        vm.loadAll = loadAll;

        loadAll();

        function loadAll() {
            Item.query(function(result) {
                vm.items = result;
            });
        }
        
        

        function search () {
            if (!vm.searchQuery) {
                return vm.loadAll();
            }
            ItemSearch.query({query: vm.searchQuery}, function(result) {
                vm.items = result;
            });
        }    }
})();
