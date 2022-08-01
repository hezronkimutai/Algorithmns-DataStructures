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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function chunkMaxLength(arr, chunkSize, maxLength) {
    return Array.from({ length: maxLength }, () => arr.splice(0, chunkSize));
}

function encryption(s) {
    // Write your code here
    const stringWithNoSpaces = s.split("").filter(item => item !== " ").join("");
    const sqrt = parseInt(Math.sqrt(stringWithNoSpaces.length));
    const columnSize = stringWithNoSpaces.length > sqrt * sqrt ? sqrt + 1 : sqrt;
    let chunkArr = chunkMaxLength(stringWithNoSpaces.split(""), columnSize, columnSize);
    let resultArr = chunkArr.map(item => ([]));
    chunkArr.map((ar, index) => {
        ar.map((item, key) => {
            console.log({ key })
            if (resultArr[key]) {
                resultArr[key].push(item);
            }
        });

    })
    return resultArr.map(item => item.join("")).join(" ");


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
