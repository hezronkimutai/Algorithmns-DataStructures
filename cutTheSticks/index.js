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
 * Complete the 'cutTheSticks' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function cutTheSticks(arr) {
    let sticks = arr;
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
        if (sticks.length) {
            answer.push(sticks.length);
        }
        const min = Math.min(...sticks);
        console.log({ min });
        sticks = sticks.filter(stick => stick !== min);
        console.log({ sticks });

        sticks = sticks.map(stick => (stick - min));
        console.log({ sticks });

    }
    console.log({ answer });
    return answer
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = cutTheSticks(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
