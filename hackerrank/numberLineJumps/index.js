"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map((str) => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
  let pos1 = x1,
    pos2 = x2,
    ans = "NO";
  while (
    0 <= x1 &&
    x1 <= x2 &&
    x2 <= 10000 &&
    1 <= v1 &&
    v1 <= 10000 &&
    1 <= v2 &&
    v2 <= 10000 &&
    pos1 <= 10000 &&
    pos2 <= 10000 &&
    pos1 <= pos2
  ) {
    pos1 = pos1 + v1;
    pos2 = pos2 + v2;
    if (pos1 === pos2) {
      ans = "YES";
    }
    console.log(pos1, pos2);
  }
  return ans;
  // return v2%v1 === 0 ? 'YES':'NO'
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const x1V1X2V2 = readLine().split(" ");

  const x1 = parseInt(x1V1X2V2[0], 10);

  const v1 = parseInt(x1V1X2V2[1], 10);

  const x2 = parseInt(x1V1X2V2[2], 10);

  const v2 = parseInt(x1V1X2V2[3], 10);

  let result = kangaroo(x1, v1, x2, v2);

  ws.write(result + "\n");

  ws.end();
}
