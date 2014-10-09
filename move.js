function move(robot) {
    switch (robot.f) {
        case "NORTH":
            if (robot.y + 1 > 4) {
                console.log('out of bounds!');
            } else {
            robot.y++;
            }
            break;

        case "EAST":
            if (robot.x + 1 > 4) {
                console.log('out of bounds!');
            } else {
            robot.x++;
            }
            break;

        case "SOUTH":
            if (robot.y - 1 < 0) {
                console.log('out of bounds!');
            } else {
            robot.y--;
            }
            break;

        case "WEST":
            if (robot.x - 1 < 0) {
                console.log('out of bounds!');
            } else {
            robot.x--;
            }
            break;
    }
    return robot;
}
module.exports = move;
