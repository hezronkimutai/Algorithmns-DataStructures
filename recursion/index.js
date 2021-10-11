console.log("recursion");

// Let's do some sorting

const recursionFn = (a, c) => {
    console.log({ a, c });

    if (a <= 0) {
        return
    }
    recursionFn(a - 1, "a");
    recursionFn(a - 1, "b");

}


console.time("Time");
recursionFn(4);
console.timeEnd("Time")
