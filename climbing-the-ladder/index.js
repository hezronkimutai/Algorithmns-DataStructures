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
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    ranked = [...new Set(ranked)];
    ranked = ranked.sort((a, b) => (a + b));
    console.log({ ranked })

    const result = player.map(p => {

        if (p <= Math.min(...ranked)) {
            return ranked.length + 1;

        }
        else if (p >= Math.max(...ranked)) {
            return 1;

        }
        else {
            let i = 0;

            ranked.forEach((r, index) => {
                if ((!ranked[index - 1] || p < ranked[index - 1]) && p >= r && (p >= ranked[index + 1] || !ranked[index + 1])) {
                    i = index + 1;
                }
            })

            return i;

        }

    });

    return result.filter(Boolean);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}

main();
