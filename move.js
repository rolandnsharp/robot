function move(robot) {
    switch (robot.f) {
        case "NORTH":
            if (robot.y + 1 > 4) {
                console.log("There is no more table NORTH of here.");
            } else {
            robot.y++;
            }
            break;

        case "EAST":
            if (robot.x + 1 > 4) {
                console.log("There is no more table EAST of here.");
            } else {
            robot.x++;
            }
            break;

        case "SOUTH":
            if (robot.y - 1 < 0) {
                console.log("There is no more table SOUTH of here.");
            } else {
            robot.y--;
            }
            break;

        case "WEST":
            if (robot.x - 1 < 0) {
                console.log("There is no more table WEST of here.");
            } else {
            robot.x--;
            }
            break;
    }
    return robot;
}

module.exports = move;
