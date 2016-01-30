var app = require('express')();
var http = require('http')
    .Server(app);
var io = require('socket.io')(http);
var counter = 0;
var connections = [];
io.on('connection', function (socket) {
    connections.push(socket);
    console.log('a user connected');
    socket.on('action', function(action){
        console.log(action, counter);
        socket.emit('action', {type: 'increment', payload: counter++});
    });

    socket.on('disconnect', () => {
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});
