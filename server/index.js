const express = require ('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
// DB Setup
MongoClient.connect('mongodb://127.0.0.1:3090/app', function(err, db) {
  if (err) {
    throw err;
  }
  console.log('db connected');
  db.close();
});
mongoose.connect('mongodb://127.0.0.1/app');
//App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type:'*/*'}));
router(app);
// Server Setup
// i
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server is listening on port: ',port);