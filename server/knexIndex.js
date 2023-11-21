const knex = require("knex");
const knexConfig = require("./knexfile");
require("dotenv").config();

const environment = process.env.NODE_ENV;
console.log("NODE_ENV", environment);
console.log("NODE_ENV", knexConfig[environment]);

module.exports = knex(knexConfig[environment]);
// module.exports = knex(knexConfig["production"]);
// module.exports = knex(knexConfig["development"]);
