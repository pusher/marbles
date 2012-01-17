;(function() {

  LevelA = function(world) {
  	var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2World = Box2D.Dynamics.b2World;

  	var fixDef = new b2FixtureDef;
    fixDef.density = 1.0;
    fixDef.friction = 0;
    fixDef.restitution = 0.2;

  	var bodyDef = new b2BodyDef;
    bodyDef.type = b2Body.b2_staticBody;
    fixDef.shape = new b2PolygonShape;

    fixDef.shape.SetAsBox(1.4, 10);
    bodyDef.position.Set(7, 8.58);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(1.40, 10);
    bodyDef.position.Set(15.40, 14);
    world.CreateBody(bodyDef).CreateFixture(fixDef);

    fixDef.shape.SetAsBox(1.40, 10);
    bodyDef.position.Set(23.79, 7.8);
    world.CreateBody(bodyDef).CreateFixture(fixDef);


  };

}).call(this);