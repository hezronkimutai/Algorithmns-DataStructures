const sort = (array) => {
  let n = array.length;
  for (let j = 1; j < n; j++) {
    let key = array[j];
    let i = j - 1;
    while ((i > -1) && (array[i] > key)) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
}

const main = () => {
  const arr1 = [9, 14, 3, 2, 43, 11, 58, 22];
  console.log("Before Insertion Sort");
  console.log(arr1);
  sort(arr1);
  console.log("After Insertion Sort");
  console.log(arr1);
}
main();
