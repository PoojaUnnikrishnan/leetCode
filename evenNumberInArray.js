var findNumbers = function (nums) {
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        let count = 0
        while (nums[i] > 0) {
            nums[i] = Math.floor(nums[i] / 10)
            count++
        }
        if (count % 2 === 0) {
            result++
        }

    }
    return result
};
console.log(findNumbers([555, 901, 482, 1771]));