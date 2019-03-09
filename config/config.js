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
  // production: {
  //   use_env_variable: JAWSDB_URL,
  //   dialect: mysql
  // }
};