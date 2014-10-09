function place(orientation, robot) {
    var orientation = orientation.split(','),
        x = parseInt(orientation[0]),
        y = parseInt(orientation[1]);
    if (x < 0 || x > 4 || y < 0 || y > 4) {
        // if coordinates are outside the dimensions of the table, return message and don't change robot
        console.log('No table found at coordinates:' + x + ',' + y);
        return robot;
    }
    robot.x = x;
    robot.y = y;
    robot.f = orientation[2].toUpperCase();
    return robot;
}
module.exports = place;
