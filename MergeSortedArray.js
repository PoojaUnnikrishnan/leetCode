
var merge = function (nums1, m, nums2, n) {

    let first = 0;
    let second = 0;
    let shift = 0;

    while (first < m + n && second < n) {
        if (first < m + shift) {
            if (nums1[first] <= nums2[second]) {
                first++;
            } else {
                nums1.splice(first, 0, nums2[second])
                nums1.pop()
                first++
                second++
                shift++
            }
        } else {
            if (nums1[first] != 0 && nums1[first] <= nums2[second]) {
                first++;
            } else {
                nums1.splice(first, 0, nums2[second])
                nums1.pop()
                second++
                shift++
            }
        }

    }

    return nums1

    //     for(let i = m, j = 0; j < n; i++, j++) {
    //         nums1[i] = nums2[j]
    //     }

    //    return nums1.sort((a,b) => a - b);

    // let firstArr = nums1.slice(0,m);
    // firstArr.push(...nums2.slice(0,n));
    // firstArr.sort((a,b) => a - b)
    // console.log(firstArr)
    // return firstArr
};
// console.log(merge([-1, 3, 0, 0, 0, 0, 0], 2, [0, 0, 1, 2, 3], 5))
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
// console.log(merge([1], 1, [], 0))
// console.log(merge([2, 0], 1, [1], 1))
console.log(merge([4, 0, 0, 0, 0, 0], 1, [1, 2, 3, 5, 6], 5))



