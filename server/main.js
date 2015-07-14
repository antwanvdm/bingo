//Require modules
var http = require('http');
var io = require('socket.io');
var bingo = require('./modules/bingo.js');

//Start server
var server = http.createServer();
server.listen(3001);
var socket = io.listen(server);

//Default connection handler when client connects to server
socket.on('connection', socketConnectionHandler);

/**
 * @param socket
 */
function socketConnectionHandler(socket)
{
    //Whenever a user connects, send him the bingo items
    socket.emit('items', bingo.getRandomItems());

    //Listeners within connection
    socket.on('click', socketClickHandler.bind(this, socket));
}

/**
 * Triggered when the client clicks a bingo item
 *
 * @param socket
 * @param id
 */
function socketClickHandler(socket, id)
{
    if(bingo.checkItemOfList(id)){
        socket.broadcast.emit('status', id);
    }
}
