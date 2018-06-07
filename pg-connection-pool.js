"use strict";

const pg = require("pg");
const pool = new pg.Pool({

  user:"postgres",
  password: "gover23",
  host: "localhost",
  port: 2312,
  database: "ExpressShopDB",
  ssl: false
});

module.exports = pool;