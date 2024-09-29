var moveZeroes = function (nums) {
    let currentIndex = 0
    let swapIndex = 0
    while (currentIndex < nums.length) {

        if (nums[currentIndex] === 0) {
            currentIndex++

        } else {
            let temp = nums[currentIndex]
            nums[currentIndex] = nums[swapIndex]
            nums[swapIndex] = temp
            swapIndex++
            currentIndex++
        }
    }


    return nums
};
console.log(moveZeroes([0]))