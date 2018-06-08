"use strict";

const cartItems = {
    template: `
    <header>
        <h1 class="shopping-cart-title">Your Doomsday Prep List</h1>
        <button class="continue"><i class="material-icons arrow">arrow_back</i>Continue Shopping on PrepShop</button>
    </header>
    
    <section class="shopping-notes">
    
    <section ng-repeat="item in $ctrl.cartItems" class="shopping-list">
        <a href="" ng-click="$ctrl.deleteItem(item.id);"><i class="small material-icons clear">clear</i></a>
        <h4 class="item-name"> {{ item.product }} {{ item.price | currency }}</h4>
        <p class="click-update">Click item to update</p>
        <input ng-blur="$ctrl.updateItem(item);" ng-model="item.product" placeholder="Update Product" class="item-title">
        <input ng-blur="$ctrl.updateItem(item);" ng-model="item.price" placeholder="Update Item Price">
        <div class="quantity-div">
            <input ng-blur="$ctrl.updateItem(item);" ng-model="item.quantity" placeholder="Update Item Quantity" class="input-details">
            <button ng-click="$ctrl.increaseItem(item)" class="quantity-button"> + </button>
            <button ng-click="$ctrl.decreaseItem(item)" class="quantity-button"> - </button>
        </div>
    </section>
   
   
    <form ng-submit="$ctrl.addItem($ctrl.newItem);" class="form">
        <h5 class="add-title"> Add New Item </h5>
        <input type="text" placeholder="Name of Product" ng-model="$ctrl.newItem.product">
        <input type="text" placeholder="Price" ng-model="$ctrl.newItem.price">
        <input type="text" placeholder="Quantity" ng-model="$ctrl.newItem.quantity">
        <button>Add to List!</button>
    </form>

    </section>
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        CartService.getAllItems().then((response) => {
            console.log("from response/component");
            vm.cartItems = response.data;
        });
        vm.addItem = (newItem) => {
            // pass arguments over to service and pass in inputs
            CartService.addItem(newItem).then((response) => {
              // reset item to equal response.data
              vm.cartItems = response.data;
            });
            vm.newItem = {};
          };

        vm.deleteItem = (id) => {
            console.log(id);
            console.log(typeof id);
            CartService.deleteItem(id).then((response) => {
              vm.cartItems = response.data;
            });  
          };

        vm.updateItem = (item) => {
            CartService.updateItem(item).then((response) => {
              vm.cartItems = response.data;
            });
          };

        vm.increaseItem = (item) => {
            item.quantity++;
            vm.updateItem(item);
        };

        vm.decreaseItem = (item) => {
            if (item.quantity > 0) {
                item.quantity--;
            };
            vm.updateItem(item);
        };

    }]
};


angular
  .module("app")
  .component("cartItems", cartItems);