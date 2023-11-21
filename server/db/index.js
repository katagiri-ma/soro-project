const knex = require("knex");
const knexConfig = require("./knexfile");

const environment = process.env.NODE_ENV;
console.log(environment);

module.exports = knex(knexConfig[environment]);
