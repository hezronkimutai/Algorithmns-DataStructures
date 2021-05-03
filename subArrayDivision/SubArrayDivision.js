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

// Complete the birthday function below.
const cobinationArr = [];
function combinationUtil(arr, data, start, end, index, r) {
    if (index == r) {
        cobinationArr.push(data)
        return 0;
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) {
        data[index] = arr[i];
        console.log({ data })
        combinationUtil(arr, data, i + 1, end, index + 1, r);
    }

}

function birthday(arr, d, r) {
    const arrLen = arr.length;
    let data = new Array(r);
    console.log({ arr, d, r, arrLen });
    combinationUtil(arr, data, 0, arrLen - 1, 0, r);

    const fittingArr = cobinationArr.filter(arr => arr.reduce((a, b) => a + b, 0) === d);
    console.log({ cobinationArr, fittingArr, d });
    return fittingArr.length;

}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

    const dm = readLine().replace(/\s+$/g, '').split(' ');

    const d = parseInt(dm[0], 10);

    const m = parseInt(dm[1], 10);

    const result = birthday(s, d, m);

    ws.write(result + '\n');

    ws.end();
}
