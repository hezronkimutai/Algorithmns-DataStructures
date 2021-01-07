
const CombSort = (nums) => {
  let gap_length = nums.length;
  let shrinkFactor = 1.3;
  let swapped = false;

  while (gap_length > 1 || swapped) {
    if (gap_length > 1) {
      gap_length = parseInt(gap_length / shrinkFactor);
    }

    swapped = false;

    for (let i = 0; gap_length + i < nums.length; i++) {
      if (nums[i] > nums[i + gap_length]) {
        swap(nums, i, i + gap_length);
        swapped = true;
      }
    }
  }
}

const swap = (nums, x, y) => {
  const temp = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
}

const main = () => {
  const nums = [7, -5, 3, 2, 1, 0, 45];
  console.log("Original Array:");
  console.log(nums);
  CombSort(nums);
  console.log("Sorted Array");
  console.log(nums);
}

main();
