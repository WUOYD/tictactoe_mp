const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let sockets = [];
let restart = 0;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static("public"));



io.on('connection', (socket) => {
  sockets.push(socket);

  if (sockets.length == 1) {
    socket.emit("turn", true);
  }
  else if (sockets.length == 2) {
    socket.emit("start", true);
    socket.broadcast.emit("start", true);
  }

  socket.on('click', (tile) => {
    socket.broadcast.emit('click', tile)
    socket.broadcast.emit("turn", true);
  })

  socket.on('restart', status => {
    restart++
    if(restart==2){
      socket.emit("start", true);
      socket.broadcast.emit("start", true);
      restart=0;
    }
  })

  socket.on('disconnect', function() {
    console.log('Got disconnect!');
    let i = sockets.indexOf(socket);
    sockets.splice(i, 1);
  });

})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
