const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');
const { setupDb } = require('./setup/mongoose');
const path = require('path');
const API = require('./api');

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

const setup = async () => {

 await setupDb(process.env.MONGO_DB_URI);

 app.use('/api', API.router);
 app.use(express.static(path.join(__dirname, '../build')));

 app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
 });

 app.listen(process.env.PORT, () => {
  console.log(`server started port: ${process.env.PORT} baseUrl: ${process.env.BASE_URL}`);
 });
};

setup();
