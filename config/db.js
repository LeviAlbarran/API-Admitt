const Sequelize = require('sequelize');

/*
const db = new Sequelize('bancoestado', 'admin', 'admin', {
  host: 'root',
  dialect: 'mysql',
  port: '3306',
  log: false,
  define: {
    timestamps:false
  },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }  
});

module.exports = db;
*/
// Option 2: Passing a connection URI
//const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');