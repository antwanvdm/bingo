//Global vars
var host, socket;

//@TODO Refactor: Where does this code belong in a reactJS project?

//Set vars for later use
host = window.location.hostname;
socket = io.connect("http://" + host + ":3001");

//Request permission from user to send notifications
Notification.requestPermission();

//Socket listeners
socket.on('items', socketItemsListener);
socket.on('status', socketStatusListener);

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
