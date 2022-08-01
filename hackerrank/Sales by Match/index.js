'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let i = 0;
    let used = [];
    for(let a=0; a<=n; a++ ){
           let j = 0;
    for(let b=0; b<=n; b++ ){
        if (!used.includes(ar[a]) && ar[a] && (ar[a] === ar[b])){
            j=j+1;
        }  
    }
   used.push(ar[a]);
  i = i + parseInt(j/2); 
   j = 0; 
};
return i;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
