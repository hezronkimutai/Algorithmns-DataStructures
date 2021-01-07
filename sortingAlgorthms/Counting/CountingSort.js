let countingSort = (arr, min, max) => {
  let i = min,
    j = 0,
    len = arr.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};

const main = () => {
  testArr = [-5, -10, 0, -3, 8, 5, -1, 10];
  console.log("Before sort");
  console.log(testArr);
  const sortArr = countingSort(testArr, Math.min(...testArr), Math.max(...testArr));
  console.log("After sort");
  console.log(sortArr);
}
main();