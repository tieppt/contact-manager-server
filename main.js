// load .env config
require('dotenv').config();
process.env.ROOT_DIR = __dirname;
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/api/ContactRoute');

// environment variables
const PORT = process.env.PORT || 8000;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_URL = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}`;

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL);

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', contactRoutes);

app.get('/', (req, res) => {
  res.send('Contact Manager');
});


app.listen(PORT, () => {
  console.log(`Contact app listening on port ${PORT}!`);
});
