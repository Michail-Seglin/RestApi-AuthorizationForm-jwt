const express = require('express');
const { getAllUsers, createUser, deleteUser, getUserById, authUser, updateUser } = require('../service/sevice');
const createToken = require('../helper/jwt');
const { buildResponse } = require('../helper/buildResponse');
const routeUser = express.Router();

routeUser.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

routeUser.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

routeUser.post('/', async (req, res) => {
    try {

        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password)
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

routeUser.post('/auth', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userData = await authUser(email, password)
        const token = createToken(userData);
        res.cookie('access_token', token, {
            httpOnly: false,
            secure: true
        })

        buildResponse(res, userData, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

routeUser.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

routeUser.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, password } = req.body;
        const data = await updateUser(id, name, surname, email, password)
        buildResponse(res, data, 200);
    } catch (er) {
        buildResponse(res, er.message, 404);
    }
})

module.exports = { routeUser }