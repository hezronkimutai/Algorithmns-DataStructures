function merge(left, right) {
  let arr = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return [...arr, ...left, ...right]
}

function mergeSort(array) {
  const arrLength = array.length;
  const half = arrLength / 2;
  if (arrLength < 2) {
    return array
  }
  const left = array.splice(0, half);
  const leftArr = mergeSort(left);
  const rightArr = mergeSort(array);
  console.log({ leftArr });
  console.log({ rightArr })
  return merge(leftArr, rightArr);
}
array = [4, 8, 7, 2, 11, 1, 3];

console.log(mergeSort(array));