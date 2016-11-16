(function() {
    'use strict';

    angular
        .module('jhp2App')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$scope', '$state','Item', 'ItemSearch'];


    function ItemsController ($scope, $state, Item, ItemSearch) {
        var vm = this;
        
        vm.items = [];
        vm.loadAll = loadAll;
        vm.Test=Test;
       loadAll();
       
        function loadAll() {
            Item.query(function(result) {
                vm.items = result;
                console.log(JSON.stringify(vm.items));
            });
        }
        function Test () {
           console.log("This is test function of item controller");
        }
    }
})();

