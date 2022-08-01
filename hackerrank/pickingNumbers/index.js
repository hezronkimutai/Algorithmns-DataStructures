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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    const meetCriterion = [[]];
    for (let i = 0; i < a.length; i++) {
        const item1 = a[i];//4,5
        const lastItem = meetCriterion[meetCriterion.length - 1];
        lastItem.push(item1)//6,3


        for (let j = 0; j < a.length; j++) {
            const item2 = a[j];
            const difference = Math.abs(item1 - item2);
            if (difference <= 1 && i !== j) {
                lastItem.push(item2);
            }

        }
        meetCriterion.push([]);
    }



    meetCriterion.map((criterion) => {
        const max = Math.max(...criterion);
        const min = Math.min(...criterion);
        const mid = Math.round((max + min) / 2);

        const aCount = new Map([...new Set(criterion)].map(
            x => [x, criterion.filter(y => y === x).length]
        ));

        const maxOccurences = aCount.get(max);
        const minOccurences = aCount.get(min);
        const el = maxOccurences < minOccurences ? max : min

        const removeElement = (arr, element) => {
            if (arr.indexOf(element) !== -1) {
                arr.splice(arr.indexOf(element), 1);
                return removeElement(arr, element);
            };
            return;
        };
        if (mid === max || min === mid) {
            return criterion;
        } else {
            removeElement(criterion, el)

        }
    });
    const result = meetCriterion.reduce((r, s) => s.length > r.length ? s : r);
    return result.length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
