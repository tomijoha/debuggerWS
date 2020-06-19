const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World again!')
});

app.get('/debug', (req, res) => {
    res.send('TODO on later...')
  });

app.listen(8000, () => {
  console.log('Example app listening on port 8000!')
});