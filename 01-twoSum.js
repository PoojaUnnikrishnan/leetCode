// var twoSum = function(nums, target) {
//     let response = []
//     for (let i = 0; i <= nums.length; i++){
//         let res = nums[i]
//         for (let j = i+1; j<=nums.length; j++){
//              if(target == res + nums[j]){
//                  response.push(i, j)
//              }
//         }
//     }
//     return response
// };
var twoSum = function (nums, target) {
  let response = {}
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in response) {
      return [i, response[target - nums[i]]]
    }
    response[nums[i]] = i
  }
};
