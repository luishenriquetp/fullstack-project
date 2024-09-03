const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const noDataBaseRoute = require('./routes/noDataBaseRoute');
const userRoutes = require('./routes/users');

app.use('/api', noDataBaseRoute);
app.use('/api', userRoutes);

module.exports = app;

