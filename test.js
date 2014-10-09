var test = require('tape'),
	robot = require('./robot');

test('robot is placed correctly at position 1,1,SOUTH', function(t) {
    t.plan(3);
    robot.commander('PLACE 1,1,SOUTH', function(robot){
    t.equal(robot.x, 1);
    t.equal(robot.y, 1);
    t.equal(robot.f, 'SOUTH');
   });
});

test('robot should move SOUTH one square to position 1,0,SOUTH', function(t) {
    t.plan(3);
    robot.commander('MOVE', function(robot){
    t.equal(robot.x, 1);
    t.equal(robot.y, 0);
    t.equal(robot.f, 'SOUTH');
   });
});

test('robot should not be able to move SOUTH any further and should stay at position 1,0,SOUTH', function(t) {
    t.plan(3);
    robot.commander('MOVE', function(robot){
    t.equal(robot.x, 1);
    t.equal(robot.y, 0);
    t.equal(robot.f, 'SOUTH');
   });
});

test('robot should trun LEFT to face EAST but stay at position x:1, y:0', function(t) {
    t.plan(3);
    robot.commander('LEFT', function(robot){
    t.equal(robot.x, 1);
    t.equal(robot.y, 0);
    t.equal(robot.f, 'EAST');
   });
});

test('robot should move EAST one square to position x:2, y:0', function(t) {
    t.plan(3);
    robot.commander('MOVE', function(robot){
    t.equal(robot.x, 2);
    t.equal(robot.y, 0);
    t.equal(robot.f, 'EAST');
   });
});

test('robot should be placed in new location: 4,3,WEST.', function(t) {
    t.plan(3);
    robot.commander('PLACE 4,3,WEST', function(robot){
    t.equal(robot.x, 4);
    t.equal(robot.y, 3);
    t.equal(robot.f, 'WEST');
   });
});

test('robot should trun RIGHT to face NORTH but stay at position x:4, y:3', function(t) {
    t.plan(3);
    robot.commander('RIGHT', function(robot){
    t.equal(robot.x, 4);
    t.equal(robot.y, 3);
    t.equal(robot.f, 'NORTH');
   });
});
