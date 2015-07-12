//Require modules
var http = require('http');
var io = require('socket.io');

//Start server
var server = http.createServer();
server.listen(3001);
var socket = io.listen(server);

//Load data from JSON
var items = require('./data.json');

/**
 * @returns {Number} Random number between the two given from and to variables
 */
function getRandomNumber(from, to)
{
    return Math.floor(Math.random() * (to - from + 1) + from);
}

/**
 * @returns {Array}
 */
function getBingoItems()
{
    //Define variables
    var originalItems = items.slice();
    var bingoItems = [];

    //Loop for each needed bingo item
    for (var i = 0; i < 16; i++) {
        //Generate a random number and splice it from the total bingo items that are still left
        var randomNumber = getRandomNumber(0, originalItems.length - 1);
        var randomItem = originalItems.splice(randomNumber, 1)[0];

        //Add the BingoItem object to the array
        bingoItems.push(randomItem);
    }

    return bingoItems;
}

socket.on('connection', function (socket)
{
    //Whenever a user connects, send him the bingo items
    socket.emit('items', getBingoItems());

    socket.on('click', function (data)
    {
        socket.broadcast.emit('status', data);
    });
});
