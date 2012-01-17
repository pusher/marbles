;(function() {
  this.Comms = function(isClient, incomingMoveCallback) {
    this.pusher = new Pusher('298476ce85640b88848c');
    this.pusher.channel_auth_endpoint = 'http://localhost:3000/pusher/auth';

    this.channel = this.pusher.subscribe('private-marbles.wtf');

    var self = this;
    this.channel.bind("pusher:subscription_succeeded", function() {
      console.log("subbed!")
      if(isClient) {
        self.handleOrientation();
      }
      else {
        self.handleIncomingMoves(incomingMoveCallback);
      }
    });
  };

  this.Comms.prototype = {
    handleOrientation: function() {
      var self = this;
      new OrientationHandler(function (beta, gamma) {
        self.channel.trigger('client-tilt', {
          socket_id: self.pusher.connection.socket_id,
          ew: beta,
          ns: gamma,
        });
      }, 50);
    },

    handleIncomingMoves: function(cb) {
      this.channel.bind('client-tilt', function(data) {
        cb(data);
      });
    }
  };
}).call(this);