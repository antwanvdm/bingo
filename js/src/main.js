//Global vars
var host, socket;

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

    //Tell the server we have arrived
    socket.emit('new', retrieveSessionId());
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
    socket.on('status', socketStatusListener);
    socket.on('bingo', socketBingoListener);
}

/**
 * Listen to the items being send from the server
 *
 * @param items
 */
function socketItemsListener(items)
{
    bingoCardInstance.setState({items: items});
}

/**
 * Listen to the items being send from the server
 *
 * @param items
 */
function socketFullListener(items)
{
    alert("Wacht even op de volgende ronde!");
}

/**
 * Listen to an individual item update
 *
 * @param item
 */
function socketStatusListener(item)
{
    var notification = new Notification("Bingo update: " + item.text);
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
 * @param winners
 */
function socketBingoListener(winners)
{
    var notification = new Notification("BINGO!!" + winners.join(','));
    setTimeout(startNewRound.bind(this, notification), 10000);
}

/**
 * Start a fresh new round by requesting new items
 *
 * @param notification
 */
function startNewRound(notification)
{
    closeNotification(notification);
    socket.emit('new', retrieveSessionId());
}
