var validMountainArray = function (arr) {
    // let arrayMax = Math.max(...arr)
    // let peakReached = false
    // if (arr.length < 3) {
    //     return false
    // }
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === arrayMax) {
    //         peakReached = true
    //     }
    //     if (peakReached) {
    //         if (arr[i + 1] >= arr[i]) {
    //             return false
    //         }
    //     } else {
    //         if (arr[i] >= arr[i + 1]) {
    //             return false
    //         }
    //     }
    // }
    // return true
    let i = 0;
    const n = arr.length
    while (i < n - 1 && arr[i] < arr[i + 1]) {
        i++
    }
    if (i === 0 || i === n - 1) {
        return false
    }
    while (i < n - 1 && arr[i] > arr[i + 1]) {
        i++
    }
    return i === n - 1
};
console.log(validMountainArray([0, 3, 2, 1]))