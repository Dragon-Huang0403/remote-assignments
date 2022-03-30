function twoSum(nums, target) {
    // Use two for loop to compare every two numbers
    for (let i = 0; i < nums.length; i++) {
        // if num[i] >= target, then skip this.
        if (nums[i] >= target) {
            continue
        }

        for (let j = i; j <nums.length; j++) {
            // If sum of two numbers meet target, then return "index".
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
}

let result = twoSum([2, 7, 11, 15], 9);
console.log(result);