var read = require('read'),
    robot = {},
    compass = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

function place(orientation) {
    var orientation = orientation.split(','),
        x = parseInt(orientation[0]),
        y = parseInt(orientation[1]);
    if (x < 0 || x > 4 || y < 0 || y > 4) {
        // if coordinates are outside the dimensions of the table, return message and don't change robot
        return console.log('No table found at coordinates:' + x + ',' + y);
    }
    robot.x = x;
    robot.y = y;
    robot.f = orientation[2].toUpperCase();
}

function move() {
    switch (robot.f) {
        case "NORTH":
            if (robot.y + 1 > 4) {
                return console.log("There is no more table NORTH.");
            }
            robot.y++;
            break;

        case "EAST":
            if (robot.x + 1 > 4) {
                return console.log("There is no more table EAST.");
            }
            robot.x++;
            break;

        case "SOUTH":
            if (robot.y - 1 < 0) {
                return console.log("There is no more table SOUTH.");
            }
            robot.y--;
            break;

        case "WEST":
            if (robot.x - 1 < 0) {
                return console.log("There is no more table WEST.");
            }
            robot.x--;
            break;
    }
}

function run() {
    read({prompt: 'command: '}, function(error, command) {
        if (error) {
            console.log();
            process.exit();
        }
        var commandKeyWord = command.split(' ')[0].toUpperCase();
        // Only allow 'PLACE' command if robot is not on the table
        if (['MOVE', 'LEFT', 'RIGHT', 'REPORT'].indexOf(commandKeyWord) !== -1 && Object.keys(robot).length === 0) {
            console.log('There is no robot on the table...');
            return run();
        }
        switch (commandKeyWord) {
            case "PLACE":
                place(command.split(' ')[1]);
                break;
            case "MOVE":
                move();
                break;
            case "LEFT":
                // find current compass index for robot orientation and add 3 in mod 4 counting to go back one count
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
        run();
    });
}
run();
