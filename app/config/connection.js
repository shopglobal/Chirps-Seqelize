// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("sequelize_chirpy", "root", "password", {
//   host: "198.199.101.74",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });

const sequelize = new Sequelize('mysql://mark:!mark$@198.199.101.74:3306/sequelize_chirpy');

// Exports the connection for other files to use
module.exports = sequelize;
