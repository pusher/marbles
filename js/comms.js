;(function() {
  this.Comms = function(gameId, eventCb) {
    var pusher = new Pusher('');
    var channel = pusher.subscribe('');
    channel.bind('private-marbles.' + gameId, function(data) {
      eventCb(data);
    });
  };

  // this.Comms.prototype = {

  // };
}).call(this);