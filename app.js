var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
//app.use(bodyParser.json({ type: 'application/*+json' }));

var jsonParser = bodyParser.json();

// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// });

app.post('/test', function(req,res){
    console.log("req.body >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(req.body);
    res.send(req.body);
});

app.get('/', function (req, res) {
    res.sendFile('index.html', { root: __dirname });
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chatMessage', function (msg) {
        console.log('message: ' + msg);
        io.emit('chatMessage', msg);
    });
});

var port = 3000;

http.listen(port, function () {
    console.log('we are running on port: ' + port);
});

