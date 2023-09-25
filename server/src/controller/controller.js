const express = require('express');
const { getAllUsers, createUser, deleteUser, getUserById, authUser, updateUser } = require('../service/sevice');
const createToken = require('../helper/jwt')
const routeUser = express.Router();

routeUser.get('/', async (req, res) => {
    try {
        const data = await getAllUsers();
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message);
    }
})

routeUser.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getUserById(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message);
    }
})

routeUser.post('/', async (req, res) => {
    try {

        const { name, surname, email, password } = req.body;
        const data = await createUser(name, surname, email, password)
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message);
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
        
        res.status(200).send(userData)
    } catch (er) {
        res.status(404).send(er.message);
    }
})

routeUser.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = await deleteUser(id);
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message);
    }
})

routeUser.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, surname, email, password } = req.body;
        const data = await updateUser(id, name, surname, email, password)
        res.status(200).send(data)
    } catch (er) {
        res.status(404).send(er.message);
    }
})

module.exports = { routeUser }