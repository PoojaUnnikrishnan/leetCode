var duplicateZeros = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 && arr[i + 1]) {
            for (let j = arr.length - 1; j > i + 1; j--) {
                arr[j] = arr[j - 1]
            }
            arr[i + 1] = 0
            i++
        }
    }

};
console.log(duplicateZeros([0, 4, 1, 0, 0, 8, 0, 0, 3]));
