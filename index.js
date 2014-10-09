#!/usr/bin/env node

var read = require('read'),
    move = require('./move'),
    place = require('./place'),
    robot = {},
    compass = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function commander(command, callback) {
    var commandKeyWord = command.split(' ')[0].toUpperCase();
    // if the robot is not yet on the table, only allow the PLACE command.
    if (['MOVE', 'LEFT', 'RIGHT', 'REPORT'].indexOf(commandKeyWord) !== -1 && Object.keys(robot).length === 0) {
        console.log('There is no robot on the table...');
        callback(robot);
        return;
    }
    switch (commandKeyWord) {
        case "PLACE":
        //todo: error handling if only place is used with no arguments
            robot = place(command.split(' ')[1], robot);
            break;
        case "MOVE":
            robot = move(robot);
            break;
        case "LEFT":
            // find current compass index for robot orientation and add 3, using mod 4 counting, to move 'anticlockwise'
            robot.f = compass[(compass.indexOf(robot.f) + 3) % 4];
            break;
        case "RIGHT":
            robot.f = compass[(compass.indexOf(robot.f) + 1) % 4];
            break;
        case "REPORT":
            console.log(robot);
            break;
        default:
            console.log('Invalid command:', command);
            break;
    }
    callback(robot);
}

function run() {
    read({
        prompt: 'command: '
    }, function(error, command) {
        // provides clean output when using ctrl + c
        if (error) {
            console.log();
            process.exit();
        }
        commander(command, function() {
            run();
        });
    });
}
run();

module.exports = commander;
