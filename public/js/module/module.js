"use strict";

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
        .when("/cart-items", {
            template: `<cart-items></cart-items>`
        })
        .otherwise({
            redirectTo: "/cart-items"
        });
    });
