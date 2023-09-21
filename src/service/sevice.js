const { getAllUsersDB, createUserDB, deleteUserDB, updateUserDB, getUserByIdDB, getByEmailDB } = require("../repository/repository");
const bcrypt = require('bcrypt');

const salt = 10;

async function getAllUsers() {
    const data = await getAllUsersDB();
    return data;
}

async function getUserById(id) {
    const data = await getUserByIdDB(id);
    return data
}

async function createUser(name, surname, email, password) {

    const user = await getAllUsersDB(email);
    if (user.length) throw new Error('user exist')

    const hashPwd = await bcrypt.hash(password, salt);

    const data = await createUserDB(name, surname, email, hashPwd);
    return data;
}

async function updateUser(id, name, surname, email, password) {
    const data = await updateUserDB(id, name, surname, email, password);
    return data
}

async function deleteUser(id) {
    const data = await deleteUserDB(id);
    return data
}

async function authUser(email, password) {
    const user = await getByEmailDB(email);
    if (!user.length) throw new Error('user not found');
    const hashPwd = user[0].password;
    const bool = await bcrypt.compare(password, hashPwd);

    if (!bool) throw new Error('password is fault')
    return user
}


module.exports = { authUser, updateUser, getAllUsers, createUser, deleteUser, getUserById }