//Global vars
var host, socket, bingoCardInstance, endGameInstance;

//Window loaded, start magic
window.addEventListener('load', init);

/**
 * @TODO Refactor: Where does this code belong in a reactJS project?
 */
function init()
{
    //Set vars for later use
    host = window.location.hostname;
    socket = io.connect("http://" + host + ":3001");

    //Request permission from user to send notifications
    Notification.requestPermission();

    //Socket listeners
    this.setSocketListeners();

    //Start a new round
    this.startNewRound();
}

/**
 * Retrieves the random sessionId.
 *
 * @todo move to separate hash class and extract in more subfunctions?
 * @returns {string}
 */
function retrieveSessionId()
{
    //Check if item exists, than return
    var currentSessionId = localStorage.getItem('sessionId');
    if (currentSessionId !== null) {
        return currentSessionId;
    }

    //Else create the sessionId @link http://stackoverflow.com/a/2117523
    var sessionId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
    {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });

    //Save in storage & return
    localStorage.setItem('sessionId', sessionId);
    return sessionId;
}

/**
 * NodeJS Socket event listeners
 */
function setSocketListeners()
{
    socket.on('items', socketItemsListener);
    socket.on('full', socketFullListener);
    socket.on('bingo', socketBingoListener);
    socket.on('countDown', socketCountDownHandler);
    socket.on('newRound', startNewRound);
}

/**
 * Listen to the items being send from the server
 *
 * @param items
 */
function socketItemsListener(items)
{
    //@Todo: Check if we can find a better solution than this, maybe keeping track of whether a user is playing or not
    socket.removeListener('status', socketStatusListener).on('status', socketStatusListener);
    bingoCardInstance.setState({items: items});
}

/**
 * Listen to the items being send from the server
 *
 * @param items
 */
function socketFullListener(items)
{
    React.render(<WaitRound />, document.getElementById('content'));
}

/**
 * Listen to an individual item update
 *
 * @param item
 */
function socketStatusListener(item)
{
    var notification = new Notification("Bingo update: " + item.title);
    setTimeout(closeNotification.bind(this, notification), 3000);
    bingoCardInstance.checkItem(item);
}

/**
 * Hide the notification that is blocking our view
 *
 * @param {Notification} notification
 */
function closeNotification(notification)
{
    notification.close();
}

/**
 * Remove the card and show the winners of the Bingo match in a Notification
 *
 * @param data
 */
function socketBingoListener(data)
{
    endGameInstance = React.render(<EndGame winners={data.winners.join(',')} seconds={data.seconds}/>, document.getElementById('content'));
}

/**
 * Set the new seconds that are retrieved
 *
 * @param seconds
 */
function socketCountDownHandler(seconds)
{
    endGameInstance.setState({seconds: seconds});
}

/**
 * Start a fresh new round by requesting new items
 */
function startNewRound()
{
    bingoCardInstance = React.render(<BingoCard />, document.getElementById('content'));
    socket.emit('new', retrieveSessionId());
}
