const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { routeUser } = require('../src/controller/controller')
const app = express();

app.use(cors())
app.use(bodyParser.json());

app.use('/user', routeUser)

app.use((er, req, res, next) => res.status(500).send(er.message));



module.exports = app;