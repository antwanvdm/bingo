var http = require('http');
var io = require('socket.io');

var server = http.createServer();
server.listen(3000);
var socket = io.listen(server);

socket.on('connection', function (socket)
{
    socket.on('click', function (data)
    {
        console.log(data);
        socket.broadcast.emit('status', data);
    });
});
