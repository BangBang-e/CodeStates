const express = require('express')
const cors = require('cors');
const jsonParser = express.json({ strict: false });

const app = express()
const port = 4999;
const ip = 'localhost';

app.use(jsonParser);

app.get('/', (req, res) => {
  res.send()
})

app.post('/upper', function (req, res) {
  res.json(req.body.toUpperCase())
})

app.post('/lower', function (req, res) {
  res.json(req.body.toLowerCase())
})

app.listen(port, ip, () => {
  console.log(`Example app listening on port ${ip}:${port}`)
})
