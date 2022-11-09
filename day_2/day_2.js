const fs = require('fs');
const input = fs.readFileSync('input.txt').toString();

const inputArray = input.split('\n').map(command => command.split(' ')).map(command => [command[0], +command[1]]);

const position = {
    depth: 0,
    horizontal: 0
}

for (let [command, value] of inputArray) {
    switch(command) {
        case 'forward':
            position.horizontal += value;
            break;
        
        case 'down':
            position.depth+= value;
            break;

        case 'up':
            position.depth -= value;
            break;
    }
}

console.log(position.horizontal * position.depth);
