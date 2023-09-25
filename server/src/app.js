const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');


const { routeUser } = require('../src/controller/controller')
const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(cookieParser())

app.use(bodyParser.json());

app.use('/user', routeUser)

app.use((er, req, res, next) => res.status(500).send(er.message));



module.exports = app;