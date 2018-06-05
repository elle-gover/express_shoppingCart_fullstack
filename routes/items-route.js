"use strict";

// require Express
// declare itemRouter and tell it to handle the routes for our items
const express = require("express");
const itemRouter = express.Router();

const cartItems = [
    {
        product: "2-person tent",
        price: "199.00",
        quantity: 1,
        id: 0
    },
    {
        product: "Sunscreen",
        price: "4.99",
        quantity: 1,
        id: 1
    },
    {
        product: "Tick comb",
        price: "2.99",
        quantity: 2,
        id: 2
    },
    {
        product: "Sleeping bag",
        price: "98.99",
        quantity: 2,
        id: 3
    },
    {
        product: "Bear bag",
        price: "12.99",
        quantity: 1,
        id: 4
    },
    {
        product: "Dehydrated Lasagna",
        price: "5.99",
        quantity: 4,
        id: 5
    }
];

let idCount = 6;

// GET items
itemRouter.get("/cart-items", (req, res) => {
    console.log(cartItems);
    //send back array of items
    res.send(cartItems);
  });

//POST items
itemRouter.post("/cart-items", (req, res) => {
    console.log(cartItems);
    cartItems.push({
      product: req.body.product,
      price: req.body.price,
      quantity: req.body.quantity,
      id: idCount++
    });
    res.send(cartItems); //send array file, in this case cartItems
  });

  itemRouter.delete("/cart-items/:id", (req, res) => {
    console.log(req.params.id);
    console.log(typeof req.params.id);
    //TODO: loop through data array to find id of item you wish to delete
    for (let item of cartItems) {
        if (item.id == req.params.id) {
          //splice and pass in course and index number you wish to start with, and how many elements you wish to remove(1)
          cartItems.splice(cartItems.indexOf(item), 1);
        }
      }
    res.send(cartItems); //send array file, in this case cartItems
  });

  


// export router object
module.exports = itemRouter;