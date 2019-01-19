const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/dist'))

app.get('/', (req, res)=>{
  res.send(`Listening on port ${port}`)
})

app.listen(port, ()=>console.log(`Listening on port ${port}`));
