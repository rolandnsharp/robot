var test = require('tape'),
	robot = require('./index');

test('robot should not be able to MOVE, as it is not yet on the tabe!', function(t) {
    t.plan(1);
    robot('MOVE', function(robot){
    t.equal(Object.keys(robot).length, 0, 'robot object is empty');
   });
});

test('robot is placed correctly at position 1,1,SOUTH', function(t) {
    t.plan(3);
    robot('PLACE 1,1,SOUTH', function(robot){
    t.equal(robot.x, 1, 'x = 1');
    t.equal(robot.y, 1, 'y = 1');
    t.equal(robot.f, 'SOUTH', 'f = SOUTH');
   });
});

test('robot should move SOUTH one square to position 1,0,SOUTH', function(t) {
    t.plan(3);
    robot('MOVE', function(robot){
    t.equal(robot.x, 1, 'x = 1');
    t.equal(robot.y, 0, 'y = 0');
    t.equal(robot.f, 'SOUTH', 'f = SOUTH');
   });
});

test('robot should not be able to move SOUTH any further and should stay at position 1,0,SOUTH', function(t) {
    t.plan(3);
    robot('MOVE', function(robot){
    t.equal(robot.x, 1, 'x = 1');
    t.equal(robot.y, 0, 'y = 0');
    t.equal(robot.f, 'SOUTH', 'f = SOUTH');
   });
});

test('robot should trun LEFT to face EAST', function(t) {
    t.plan(3);
    robot('LEFT', function(robot){
    t.equal(robot.x, 1, 'x = 1');
    t.equal(robot.y, 0, 'y = 0');
    t.equal(robot.f, 'EAST', 'f = EAST');
   });
});

test('robot should move EAST one square to position 2,0,EAST', function(t) {
    t.plan(3);
    robot('MOVE', function(robot){
    t.equal(robot.x, 2, 'x = 2');
    t.equal(robot.y, 0, 'y = 0');
    t.equal(robot.f, 'EAST', 'f = EAST');
   });
});

test('robot should be placed in new location: 3,4,WEST.', function(t) {
    t.plan(3);
    robot('PLACE 3,4,WEST', function(robot){
    t.equal(robot.x, 3, 'x = 3');
    t.equal(robot.y, 4, 'y = 4');
    t.equal(robot.f, 'WEST', 'f = WEST');
   });
});

test('robot should trun RIGHT to face NORTH', function(t) {
    t.plan(3);
    robot('RIGHT', function(robot){
    t.equal(robot.x, 3, 'x = 3');
    t.equal(robot.y, 4, 'y = 4');
    t.equal(robot.f, 'NORTH', 'f = NORTH');
   });
});

test('robot should not be able to move NORTH any further and should stay at position 3,4,NORTH', function(t) {
    t.plan(3);
    robot('MOVE', function(robot){
    t.equal(robot.x, 3, 'x = 3');
    t.equal(robot.y, 4, 'y = 4');
    t.equal(robot.f, 'NORTH', 'f = NORTH');
   });
});

test('fin.', function(t) {
    t.end();
    process.exit();
});
