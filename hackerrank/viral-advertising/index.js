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
 * Complete the 'viralAdvertising' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function getTotalLikes(targetDay, day, total, sum) {
    const likes = Math.floor(total / 2);
    if (targetDay === day) {
        return sum + likes;
    }
    return getTotalLikes(targetDay, day + 1, likes * 3, sum + likes)

}
function viralAdvertising(n) {
    // Write your code here
    const likes = getTotalLikes(n, 1, 5, 0)
    return likes;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const result = viralAdvertising(n);

    ws.write(result + '\n');

    ws.end();
}
