;(function() {
  this.Marbler = function(world) {
    this.marbles = {};
    this.world = world;
  };

  this.Marbler.prototype = {
    addMarble: function(socketId) {
      var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
      var b2Body = Box2D.Dynamics.b2Body;
      var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;


      var b2BodyDef = Box2D.Dynamics.b2BodyDef;


      var bodyDef = new b2BodyDef;

      var fixDef = new b2FixtureDef;
      fixDef.density = 0.001;
      fixDef.friction = 0;
      fixDef.restitution = 0.2;

      bodyDef.type = b2Body.b2_dynamicBody;
      fixDef.shape = new b2CircleShape(1);
      bodyDef.position.x = 10;
      bodyDef.position.y = 10;

      this.marbles[socketId] = this.world.CreateBody(bodyDef)
      this.marbles[socketId].CreateFixture(fixDef);
    },

    handleMarbleMove: function(data) {
      var socketId = data.socket_id;
      if(this.marbles[socketId] === undefined) {
        this.addMarble(socketId);
      }

      this.moveMarble(data);
    },

    lastEvent: null,
    moveMarble: function(data) {
      if(this.lastEvent !== null) {
        var b2Vec2 = Box2D.Common.Math.b2Vec2;
        var marble = this.marbles[data.socket_id];

        var interval = (new Date().getTime() - this.lastEvent) / 1000;
        console.log(interval)
        var gravity = 9.8 * interval;
        var x = Math.sin(this.rad(data.ns)) * gravity;
        var y = Math.sin(this.rad(data.ew)) * gravity;

        //console.log(data.ns, data.ew, x, y)

        marble.ApplyForce(new b2Vec2(x, y), marble.GetWorldCenter());
      }

      this.lastEvent = new Date().getTime();
    },

    rad: function(degrees) {
      return (degrees / 180) * Math.PI;
    }
  };
}).call(this);