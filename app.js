"use strict";


(function(){
  angular
  .module("inventory", [])
  .controller("inventory_controller", InventoryController);

  function InventoryController(){
    var vm = this;
    vm.data = data;
    vm.sort_data_by = function(name){
      vm.sort_on = name;
      vm.is_descending = !(vm.is_descending);
    }
    vm.total_value = function(){
      var total = 0;
      vm.data.forEach(function(product){
        if(product.quantity){
          total +=(product.quantity * product.cost);
        }
      });
      return total.toFixed(2);
    }
  }
})();
