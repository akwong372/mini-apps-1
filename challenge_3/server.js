const express = require('express');
const bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
//var assert = require('assert');
const app = express();
const port = 3000;
var url = 'mongodb://localhost:27017/miniAppChallenge3';


app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
  //assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});

app.get('/', (req, res) => {
  res.send('test');
});

app.post('/', (req, res) => {
  console.log('post', req.body)
  res.send('thing');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

