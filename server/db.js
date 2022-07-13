const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'manuelcasanova',
  host: 'localhost',
  database: 'movies',
  password: 'password',
  port: 5432
});


module.exports = 
  pool;