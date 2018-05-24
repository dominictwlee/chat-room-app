const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3001;

io.on('connection', socket => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat', data => {
    io.emit('chat', data);
  });
});

server.listen(port, () => {
  console.log(`listening on *:${port}`);
});
