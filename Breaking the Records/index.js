'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
let minValue = 0, maxValue = 0, minRecordCount = 0, maxRecordCount = 0,loopCount = 0
scores.map(score=>{
    if(!loopCount){
        maxValue = score;
         minValue = score;
    }
    if(loopCount ){
        if( score < minValue){
        minValue = score;
        minRecordCount +=1;
        }
        if( score > maxValue){
        maxRecordCount +=1;
        maxValue = score;
        }
    }
   loopCount += 1 
})
return [maxRecordCount,minRecordCount];

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
