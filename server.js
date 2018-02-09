require('dotenv').load();

const express = require('express');
const mongodb = require('./database/database');
const routes = require('./routes/routes');

const app = express();

app.use('/', routes);

app.listen(3000, () => console.log('Server is running...'));

/*

require('dotenv').load();
const express = require('express');
const app = express();

const routes = require('./routes');

app.use('/', routes);

app.listen(3000, () => console.log('Running on port 3000'));


*/
