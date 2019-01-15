const express = require('express');
const bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient
// var assert = require('assert');
var mongoose = require('mongoose');
const app = express();
const port = 3000;
// var url = 'mongodb://localhost:27017/miniAppChallenge3';


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//   db.close();
// });

mongoose.connect('mongodb://localhost/miniAppChallenge3', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Connected successfully to server')
});

var userDataSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  shippingInfo: {
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    phone: Number
  },
  billingInfo: {
    creditcard: String,
    expire: String,
    cvv: Number,
    billzipcode: Number
  }
});

var UserData = mongoose.model('UserData', userDataSchema);

app.get('/', (req, res) => {
  res.send('test');
});

app.get('/data', (req, res) => {
  UserData.find({ username: req.body.username }, (err, users) => {
    if (err) {
      console.log('error', err);
    }
      res.send(users);
  })
});

app.post('/', (req, res) => {
  console.log('post', req.body)
  switch (req.body.page) {
    case 1:
      return firstPage(req, res);
    case 2:
      return secondPage(req, res);
    case 3:
      return thirdPage(req, res);
    default:
      return res.send('success');
  }
});

var firstPage = (req, res) => {
  UserData.find({ username: req.body.username }, (err, users) => {
    if (err) {
      console.log('error', err);
    }
    UserData.updateOne({ username: req.body.username }, {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }, { upsert: true }, (err, raw) => {
      if (err) { console.log(err) }
      console.log("raw response ", raw)
      res.send('success');
    });
  });
}

var secondPage = (req, res) => {
  UserData.find({ username: req.body.username }, (err, users) => {
    if (err) {
      console.log('error', err);
    }
    UserData.updateOne({ username: req.body.username }, {
      shippingInfo: {
        address: req.body.address1 + ' ' + req.body.address2,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone
      }
    }, { upsert: true }, (err, raw) => {
      if (err) { console.log(err) }
      console.log("raw response ", raw)
      res.send('success');
    });
  });
}

var thirdPage = (req, res) => {
  UserData.find({ username: req.body.username }, (err, users) => {
    if (err) {
      console.log('error', err);
    }
    UserData.updateOne({ username: req.body.username }, {
      billingInfo: {
        creditcard: req.body.creditcard,
        expire: req.body.expire,
        cvv: req.body.cvv,
        billzipcode: req.body.billzipcode,
      }
    }, { upsert: true }, (err, raw) => {
      if (err) { console.log(err) }
      console.log("raw response ", raw)
      res.send('success');
    });
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

