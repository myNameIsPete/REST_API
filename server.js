require('dotenv').load();

const express = require('express');
const mongodb = require('./database/database');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

app.use('/', routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => console.log('Server is running...'));
