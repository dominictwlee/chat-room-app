const express = require('express');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const server = http.Server(app);

app.get('/', (req, res) => {
  res.send('hello world');
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
