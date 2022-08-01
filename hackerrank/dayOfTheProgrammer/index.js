'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the dayOfProgrammer function below.
function dayOfProgrammer(year) {
    const leap = true;
    const gregoryMonthsArrays = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30];
    if (year == 1918) {
        console.log("26.09.", year);
        return `12.09.${year}`
    }
    else if (year <= 1917) {
        if (year % 4 == 0) {
            console.log("12.09.", year);
            return `12.09.${year}`
        }
        else {
            console.log("13.09.", year);
            return `13.09.${year}`

        }
    }
    else {
        if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
            console.log("12.09.", year);
            return `12.09.${year}`
        }
        else {
            console.log("13.09.", year);
            return `13.09.${year}`

        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
