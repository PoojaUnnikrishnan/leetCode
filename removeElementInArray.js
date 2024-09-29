var removeElement = function (nums, val) {
    const length = nums.length
    let left = 0
    let right = length - 1
    while (left <= right) {
        if (nums[left] !== val) {
            left++
        } else {
            if (nums[right] === val) {
                right--
            } else {
                nums[left] = nums[right]
                nums[right] = val
                right--
                left++
            }
        }
    }
    return left
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
