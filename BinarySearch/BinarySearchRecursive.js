const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const findIndex = async (inpArrays, start, end, target) => {
    const middle = parseInt((start + end) / 2);
    console.log({ target }, { start }, { end }, { middle });
    if (end < start) {
        return -1;
    }
    if (target === inpArrays[middle]) {
        return middle;
    } else if (target < inpArrays[middle]) {
        return findIndex(inpArrays, start, middle - 1, target);
    } else {
        return findIndex(inpArrays, middle + 1, end, target);
    }
}

const binarySearchRecursive = async (inpArrays) => {
    await readline.question('Enter value to be search from your array\n', async val => {
        const index = await findIndex(inpArrays, 0, inpArrays.length - 1, Number(val))
        readline.close();
        console.log('The value is at index', index);
    });
}
const main = async () => {
    await readline.question('Enter a length of an array\n', async ln => {
        //generate random array which is sorted from least to greatest
        const inpArrays = Array.from({ length: Number(ln) }, () => Math.floor(Math.random() * Number(ln))).sort();
        console.log(inpArrays);
        await binarySearchRecursive(inpArrays);
    });
}

main();
