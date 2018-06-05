"use strict";

// require Express module
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const cartItems = require("./routes/items-route");

// tell our application to use body-parser
app.use(bodyParser.json());
app.use("/portal", cartItems);

// connect to front-end files i.e. "public"
app.use(express.static(__dirname + "/public"));

// declare port number
let port = 8080;
// create the server!
app.listen(port, () => console.log(`Server listening on port ${port}.`));