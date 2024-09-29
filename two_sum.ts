// Appoach one : Assign first element of array as the first variable, then check if the first + other elements in the array are suming up to target, if yes return the indices
// function twoSum(nums: number[], target: number): number[] {
//   let response: number[] = [];
//   for (let i = 0; i < nums.length; i++) {
//     let first = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       if (target == first + nums[j]) {
//         response.push(i, j);
//       }
//     }
//   }
//   return response;
// }
// const result = twoSum([2, 7, 11, 15], 9);
// console.log(result);

//approach two : get first element store the difference btw first and target to an object, that way only half of the array has to be checked

function twoSum2(nums: number[], target: number): number[] {
  let response: { [key: number]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in response) {
      return [i, response[target - nums[i]]];
    }
    response[nums[i]] = i;
    console.log(response);
  }
  return [];
}
const result2 = twoSum2([2, 7, 11, 15], 9);
console.log(result2);
