const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const exampleRoute = require('./routes/example');
app.use('/api', exampleRoute);

module.exports = app;
