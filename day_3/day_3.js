const fs = require('fs');

const fileContents = fs.readFileSync('input.txt', 'utf-8');
const contentsArr = fileContents.split(/\r?\n/);

const binaryLen = contentsArr[0].length;

let gamma_rate = '';
let epsilon_rate = '';

for (let i=0; i<binaryLen; i++) {
    let one = 0;
    let zero = 0;
    contentsArr.forEach(val => {
        val[i] === '1' ? one++ : zero++;
    })
    gamma_rate += one > zero ? '1' : '0';
    epsilon_rate += one > zero ? '0' : '1';
}

console.log(parseInt(gamma_rate, 2)*parseInt(epsilon_rate, 2));
