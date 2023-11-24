"use strict";
/** Database setup for jobly. */
const { Player } = require("pg");
const { getDatabaseUri } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Player({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Player({
    connectionString: getDatabaseUri()
  });
}

db.connect();

module.exports = db;