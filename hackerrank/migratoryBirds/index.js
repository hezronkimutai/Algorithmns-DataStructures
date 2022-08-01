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

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr) {
    // Write your code here
    const freqObj = {}

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (freqObj[item]) {
            const temp = freqObj[item];
            freqObj[item] = temp + 1;
        } else {
            freqObj[item] = 1;
        }
    }

    let max = 0;

    // const highestFreq = {};

    Object.keys(freqObj).forEach(key => {
        if (freqObj[key] > max) {
            max = freqObj[key];
        }
    });
    const maxObj = {};

    Object.keys(freqObj).forEach(key => {
        if (freqObj[key] === max) {
            maxObj[key] = max;
        }
    });
    let min = 0;
    Object.keys(maxObj).forEach(key => {
        if (min === 0) {
            min = Number(key);
        }
        if (min > Number(key)) {
            min = Number(key);
        }
    });
    return Number(min);

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}
