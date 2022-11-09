const fs = require('fs');

const countDepthIncrease = (report) => {
    const fileContents = fs.readFileSync(report, 'utf-8');
    const contentsArr = fileContents.split(/\r?\n/);
    
    let count = 0;
    for (let i=0; i<contentsArr.length - 2; i++) {
        if (parseInt(contentsArr[i+3]) > parseInt(contentsArr[i])) count++
    }
    return count;
}

console.log(countDepthIncrease('input.txt'));