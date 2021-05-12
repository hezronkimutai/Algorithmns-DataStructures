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
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Write your code here
    let fullRepetition = parseInt(n / s.length);
    let remaingingSlots = n % s.length;
    let lastStrings = s.slice(0, remaingingSlots);
    let lastStringsArr = lastStrings.split("");
    let sArr = s.split("");
    let noOfAs = 0;
    for (let i = 0; i < sArr.length; i++) {
        let letter = sArr[i];
        if (letter === "a") {
            noOfAs++;
        }
    }
    noOfAs = noOfAs * fullRepetition;
    for (let i = 0; i < lastStringsArr.length; i++) {
        let letter = lastStringsArr[i];
        if (letter === "a") {
            noOfAs++;
        }
    }
    return noOfAs;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const n = parseInt(readLine().trim(), 10);

    const result = repeatedString(s, n);

    ws.write(result + '\n');

    ws.end();
}
