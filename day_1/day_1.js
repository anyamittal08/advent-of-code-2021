const fs = require('fs');

const countDepthIncrease = (report) => {
    const fileContents = fs.readFileSync(report, 'utf-8');
    const contentsArr = fileContents.split(/\r?\n/);
    let count = 0;
    for (let i=1; i<contentsArr.length; i++) {
        if (parseInt(contentsArr[i]) > parseInt(contentsArr[i-1])) count++;
    }
    return count;
}

console.log(countDepthIncrease('input.txt'));