var express = require('express');
var Pusher = require('node-pusher');

var app = express.createServer();
var pusher = new Pusher({
  appId: '13770',
  key: '298476ce85640b88848c',
  secret: 'aeca009d9d3ee74f3d1b',
});

app.use(express.bodyParser());

app.post('/pusher/auth', function (req, res) {
  res.send(pusher.auth(req.body.socket_id, req.body.channel_name));
});

app.use(express.static(__dirname + '/public'));

app.listen(3000);
