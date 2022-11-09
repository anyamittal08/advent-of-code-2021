const fs = require('fs');

const fileContents = fs.readFileSync('input.txt', 'utf-8');
const contentsArr = fileContents.split(/\r?\n/);

const binaryLen = contentsArr[0].length;

let gamma_rate = '';
let epsilon_rate = '';

const getMostAndLeastCommonBits = (arr, posIndex) => {
    let countOne = 0;
    let countZero = 0;
    for (let i=0; i<arr.length; i++) {
        arr[i][posIndex] === '1' ? countOne++ : countZero++;
    }
    let mostCommonBit = countOne >= countZero ? '1' : '0';
    let leastCommonBit = countOne >= countZero ? '0' : '1';
    return {mostCommonBit, leastCommonBit};
}

const getOxyRating = (bitPos, arr) => {
    let oxyDiagnostics = [...arr];

    if (oxyDiagnostics.length === 1) return oxyDiagnostics[0];
    else {
        let mostCommonBit = getMostAndLeastCommonBits(oxyDiagnostics, bitPos).mostCommonBit;
        for (let i=oxyDiagnostics.length-1; i>=0; i--) {
            if (oxyDiagnostics[i][bitPos] !== mostCommonBit) oxyDiagnostics.splice(i, 1)
        }

        return getOxyRating(bitPos+1, oxyDiagnostics)
    }
}

const getCO2Rating = (bitPos, arr) => {
    let cO2Diagnostics = [...arr];
    if (cO2Diagnostics.length === 1) return cO2Diagnostics[0];

    else {
        let leastCommonBit = getMostAndLeastCommonBits(cO2Diagnostics, bitPos).leastCommonBit;
        for (let i=cO2Diagnostics.length-1; i>=0; i--) {
            if (cO2Diagnostics[i][bitPos] !== leastCommonBit) cO2Diagnostics.splice(i, 1)
        }

        return getCO2Rating(bitPos+1, cO2Diagnostics)
    }
}

const lifeSupprtRating = parseInt(getOxyRating(0, contentsArr), 2) * parseInt(getCO2Rating(0, contentsArr), 2);
console.log(lifeSupprtRating);

