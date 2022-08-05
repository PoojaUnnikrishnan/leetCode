var romanToInt = function (s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];
    if (nextInt) {
      if (currentInt >= nextInt) {
        total = total + currentInt;
      } else {
        total = total + (nextInt - currentInt);
        i++;
      }
    } else {
      total = total + currentInt;
    }
  }
  return total;
};
console.log(romanToInt("XV"));
