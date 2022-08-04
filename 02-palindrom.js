var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let number = x; //assign x as number
  let reverse = 0; //declared a variable and gave it a value 0
  while (number > 0) {
    //check if number > 0
    reverse = reverse * 10 + (number % 10); //0*10 + number%10
    number = parseInt(number / 10); //return the integer value
  }
  return x === reverse; //return true if number(x) === reverse
};
console.log(isPalindrome(122));
