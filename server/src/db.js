const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    database: 'Users',
    password: 'Javascript23',
}
)

module.exports = pool;