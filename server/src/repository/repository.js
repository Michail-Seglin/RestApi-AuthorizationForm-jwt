const pool = require('../db');

async function getAllUsersDB() {
    const client = await pool.connect();
    const sql = 'select *from users';
    const { rows } = await client.query(sql);
    return rows

}

async function getUserByIdDB(id) {
    const client = await pool.connect();
    const sql = 'select from users where id=$1';
    const { rows } = await client.query(sql, [id]);
    return rows
}

async function createUserDB(name, surname, email, password) {

    const client = await pool.connect();
    const sql = 'insert into users(name,surname,email, password) values ($1,$2,$3,$4) returning*';
    const data = (await client.query(sql, [name, surname, email, password])).rows;
    return data
}

async function getByEmailDB(email) {
    const client = await pool.connect();

    const sql = 'select * from users where email = $1';

    const { rows } = await client.query(sql, [email]);

    return rows

}

async function deleteUserDB(id) {
    const client = await pool.connect();
    const sql = 'delete from users where id=$1 returning*';
    const data = (await client.query(sql, [id])).rows;
    return data
}

async function updateUserDB(id, name, surname, email, password) {
    const client = await pool.connect();
    const sql = 'update users set name=$1, surname = $2, email=$3, password = $4 where id=$5 returning*';
    const data = (await client.query(sql, [name, surname, email, password, id])).rows;
    return data
}
module.exports = {
    getAllUsersDB,
    createUserDB,
    getByEmailDB,
    deleteUserDB,
    getUserByIdDB, updateUserDB
}