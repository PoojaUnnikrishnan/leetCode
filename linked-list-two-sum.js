var addTwoNumbers = function (l1, l2) {
    let sum = Number(l1.reverse().join("")) + Number(l2.reverse().join(""))
    return sum.toString().split('').reverse();
};
console.log(addTwoNumbers([1, 2, 3], [3, 4, 5]))

