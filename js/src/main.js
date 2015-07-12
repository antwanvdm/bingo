var host = window.location.hostname;
var socket = io.connect("http://" + host + ":3001");

//@TODO move this code
Notification.requestPermission();

socket.on('items', function (data)
{
    bingoCardInstance.setState({items: data});
});

socket.on('status', function (item)
{
    var notification = new Notification("Bingo update: " + item.text);
});
