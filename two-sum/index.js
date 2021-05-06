/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let needed = target - nums[i];
        const index = nums.indexOf(needed);
        if (index >= 0 && index !== i) {
            return [index, i]
        }
    }
};

twoSum([1, 2, 3, 44, 5, 4, 5], 8);
