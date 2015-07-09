var host = window.location.hostname;
var socket = io.connect("http://" + host + ":3000");

//@TODO move this code
Notification.requestPermission();

socket.on('items', function (data)
{
    console.log(data);
    bingoCardInstance.setState({items: data});
});

socket.on('status', function (data)
{
    console.log('status', data);
    var notification = new Notification("Bingo update: " + data);
});
