var removeDuplicates = function (nums) {
    let unique = 0
    let current = 1
    if (nums.length === 0) {
        return 0
    }
    while (current <= nums.length - 1) {
        if (nums[unique] === nums[current]) {
            current++
        } else {
            nums[unique + 1] = nums[current]
            current++
            unique++
        }
    }
    return unique + 1
};
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))