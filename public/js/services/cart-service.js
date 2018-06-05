"use strict";

function CartService($http) {

    const getAllItems = () => {
        return $http({
            method: "GET",
            url: "/portal/cart-items"
        });
    };
     
    const addItem = (newItem) => {
    return $http({
      //make POST request, and send "newItem" object with this request (data)
      method: "POST",
      url: "/portal/cart-items",
      data: newItem
    });
  };

    const deleteItem = (id) => {
        console.log(id);
        console.log(typeof id);
        return $http({
          method: "DELETE",
          url: "/portal/cart-items/" + id
        });
      };

    return {
        getAllItems,
        deleteItem,
        addItem
    };

}


angular
  .module("app")
  .factory("CartService", CartService);