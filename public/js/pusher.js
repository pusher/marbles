var pusher = new Pusher('298476ce85640b88848c');
pusher.channel_auth_endpoint = 'http://localhost:3000/pusher/auth';

var channel = pusher.subscribe('private-marbles.wtf');

var orientationHandler = new OrientationHandler(function (beta, gamma) {
  channel.trigger('client-tilt', {
    socket_id: pusher.connection.socket_id,
    beta: beta,
    gamma: gamma,
  });
}, 1000);
