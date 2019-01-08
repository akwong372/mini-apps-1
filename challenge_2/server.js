// Use Express to serve up an index.html file and its associated assets

// The client app should be able to submit JSON data to the server,
// receive a response containing a CSV-formatted result
// (the way this is done will vary depending on where you are in the challenge).

// Implement all the report generation logic on the server.
// Do not use any external libraries (such as via npm). You may use jQuery on the client.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.send('test');
});

app.post('/', (req, res) => {
  console.log('thing')
  res.send('test');
});

app.listen(port, () => console.log(`listening on port ${port}`))