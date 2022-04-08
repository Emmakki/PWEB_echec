const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    var myroom='';
    socket.on('chat message', (msg) => {
      myroom= msg;   
      socket.join(msg);
      console.log('nouveau connecté dans le ' + msg  );

      
    });

    socket.on('ping', () => {
        io.sockets.in(myroom).emit('message', "ping" );   
      });
      socket.on('broadcast', () => {
        socket.broadcast.emit('message','broadcast');  
      });
      socket.on('leave', () => {
        socket.leave(myroom);
        socket.to(myroom).emit('user left', socket.id)
        myroom='';
      });
      

    
  });

server.listen(3000, () => {
  console.log('listening on *:3000');
});