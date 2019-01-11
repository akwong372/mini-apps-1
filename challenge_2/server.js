// Use Express to serve up an index.html file and its associated assets

// The client app should be able to submit JSON data to the server,
// receive a response containing a CSV-formatted result
// (the way this is done will vary depending on where you are in the challenge).

// Implement all the report generation logic on the server.
// Do not use any external libraries (such as via npm). You may use jQuery on the client.

// The server must flatten the JSON hierarchy, mapping each item/object in the JSON to a single line of CSV report (see included sample output), where the keys of the JSON objects will be the columns of the CSV report.
// You may assume the JSON data has a regular structure and hierarchy (see included sample file). In other words, all sibling records at a particular level of the hierarchy will have the same set of properties, but child objects might not contain the same properties. In all cases, every property you encounter must be present in the final CSV output.
// You may also assume that child records in the JSON will always be in a property called `children`.


const express = require('express');
// const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(fileUpload());
app.use(express.static('client'));

app.get('/', (req, res) => {
  console.log('get request')
  res.sendFile('new_csv_report.csv', { root: __dirname });
});

app.post('/', (req, res) => {
  if (Object.keys(req.files).length === 0) {
    return res.status(400).redirect('/');
  }
  console.log(req.files.jsonUpload.name)

  var response = jsonHandle(JSON.parse(req.files.jsonUpload.data));
  fs.writeFile('client/new_csv_report.csv', response, 'utf8', (err) => {
    if (err) {
      console.log('something went wrong', err);
      res.redirect('/');
    }
  })
  console.log('success', req.files);
  res.send(response);
});


//function to handle submitted json
var jsonHandle = (jsonObj) => {
  var csvResult = [];
  var personData = [];
  //create an array of columns
  var columns = Object.keys(jsonObj).slice(0, Object.keys(jsonObj).length - 1);

  columns.unshift('RowID');
  csvResult.push(columns);

  //adds a new row for every object
  var addRow = (obj) => {
    personData.push(csvResult.length);
    for (var i = 0; i < columns.length; i++) {
      personData.push(obj[columns[i]]);
    }
    personData = personData.filter(item => item !== undefined);
    csvResult.push(personData.join(','));
    personData = [];

    //call function on children if the children array is not empty
    if (obj.children.length > 0) {
      for (var i = 0; i < obj.children.length; i++) {
        addRow(obj.children[i]);
      }
    }
  }

  addRow(jsonObj);

  return csvResult.join('\n');
}

app.listen(port, () => console.log(`listening on port ${port}`))