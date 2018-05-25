const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 3001;
const index = require('./routes/index');

const app = express();
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);

server.listen(port, err => {
  if (err) {
    throw new Error(err);
  }
  console.log(`listening on *:${port}`);
});

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('chat', data => {
    console.log('message', JSON.stringify(data, null, 10));
    io.emit('chat', data);
  });
});
