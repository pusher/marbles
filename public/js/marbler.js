;(function() {
  this.Marbler = function(world) {
    this.marbles = {};
  };

  this.Marbler.prototype = {
    addMarble: function(socketId) {
      var fixDef = new b2FixtureDef;
      fixDef.density = 1.0;
      fixDef.friction = 0.5;
      fixDef.restitution = 0.2;

      bodyDef.type = b2Body.b2_dynamicBody;
      fixDef.shape = new b2CircleShape(1);
      bodyDef.position.x = 10;
      bodyDef.position.y = 10;

      this.marbles[socketId] = world.CreateBody(bodyDef)
      this.marbles[socketId].CreateFixture(fixDef);
    },

    handleMarbleMove: function() {
      var socketId = data.socket_id;
      if(this.marbles[socketId] === undefined) {
        this.addMarble(socketId);
      }

      this.moveMarble(data);
    },

    moveMarble: function(data) {
      marble.ApplyImpulse(new b2Vec2(1, 1), marble.GetWorldCenter());
    }
  };
}).call(this);