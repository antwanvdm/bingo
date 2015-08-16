//Require modules
var http = require('http');
var io = require('socket.io');
var bingo = require('./modules/bingo.js');

//Start server
var server = http.createServer();
server.listen(3001);
var mainSocket = io.listen(server);

//Default connection handler when client connects to server
mainSocket.on('connection', socketConnectionHandler);

/**
 * Functionality executed whenever a client connects with the socket
 *
 * @param socket
 */
function socketConnectionHandler(socket)
{
    //Listeners within connection
    socket.on('click', socketClickHandler.bind(this, socket));
    socket.on('new', socketNewHandler.bind(this, socket));
}

/**
 * Triggered when a new client connects
 *
 * @param socket
 * @param sessionId
 */
function socketNewHandler(socket, sessionId)
{
    //Whenever a user is new, send him the bingo items or tell them they have to wait for a new round
    try {
        socket.emit('items', bingo.getItems(sessionId));
    } catch (e) {
        socket.emit('full');
    }
}

/**
 * Triggered when the client clicks a bingo item
 *
 * @param socket
 * @param id
 */
function socketClickHandler(socket, id)
{
    if (bingo.checkItemOfList(id)) {
        socket.broadcast.emit('status', bingo.getItemById(id));

        //Retrieve winning players, if any; finish the game
        var winners = bingo.getWinners();
        if (winners.length > 0) {
            bingo.startNewRound();
            mainSocket.sockets.emit('bingo', winners);
        }
    }
}
