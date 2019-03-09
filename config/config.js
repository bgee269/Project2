var path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
} 

module.exports = {
  development: {
    username: "root",
    // make sure to set this env variable in your .env file
    password: process.env.LOCAL_MYSQL_PASSWORD,
    database: "blocks_db",
    host: "localhost",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "testdb",
    host: "localhost",
    dialect: "mysql",
    logging: false
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_DATABASE,
    host: process.env.PROD_DB_HOST,
    dialect: "mysql"
  }
};