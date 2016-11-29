
var socket = io.connect();

$('form').submit(function () {
    var msg = $('#m').val();
    socket.emit('chatMessage', msg);
    $('#m').val('');
    return false;
});

socket.on('chatMessage', function (msg) {
    console.log('message: ' + msg);
    $('#messages').append($('<li>').text(msg));
});


// io.on('connection', function (socket) {
//     alert('a user connected');
//     socket.on('disconnect', function () {
//         alert('user disconnected');
//     });
// });