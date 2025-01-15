const express = require('express');
const bodyParser = require('body-parser'); //Import body-parser
const app = express();

app.use(bodyParser.json()); // Use body-parser middleware before other routes
app.use(express.json()); // use express.json() after body-parser
app.post('/data', (req, res) => {
  console.log(req.body); //Check if req.body is populated
  const data = req.body;
  // ... process data ...
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});