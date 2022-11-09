const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const inputArray = input.split('\n').map(command => command.split(' ')).map(command => [command[0], +command[1]]);

const position = {
    depth: 0,
    horizontal: 0,
    aim: 0
}

for (let [command, value] of inputArray) {
    switch(command) {
        case 'forward':
            position.horizontal += value;
            position.depth += value*position.aim;
            break;

        case 'down':
            position.aim += value;
            break;

        case 'up':
            position.aim -= value;
            break;
    }
}

console.log(position.horizontal * position.depth);