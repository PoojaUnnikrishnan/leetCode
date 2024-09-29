// var replaceElements = function (arr) {
//     const length = arr.length
//     let array = [...arr]
//     for (let i = length - 1; i >= 0; i--) {
//         if (i === length - 1) {
//             array[i] = -1
//         } else {
//             array[i] = Math.max(...arr.slice(i + 1, length))
//         }
//     }
//     return array
// };
// console.log(replaceElements([4, 0, 0]))


var replaceElements = function (arr) {
    let max = -1
    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = arr[i]
        arr[i] = max
        max = Math.max(max, digit)
    }
    return arr
};
console.log(replaceElements([17, 18, 5, 4, 6, 1]))