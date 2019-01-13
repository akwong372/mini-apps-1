const express = require('express');
const app = express();
const port = 3000;


app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('test');
});

app.post('/', (req, res) => {
  console.log('post')
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

