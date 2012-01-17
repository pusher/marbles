;(function() {
  this.Comms = function(gameId, eventCb) {
    var pusher = new Pusher('298476ce85640b88848c');
    var channel = pusher.subscribe('private-marbles.wtf');
    channel.bind('client-tilt' + gameId, function(data) {
      eventCb(data);
    });
  };
}).call(this);