var twoSum = function(nums, target) {
  let result = []
  for (let i = 0; i<nums.length; i++){
      for (let j = i+1 ; j<nums.length; j++){
          if (nums[i]+nums[j] === target){
              result.push(nums[i]);
              result.push(nums[j])
              return result
          }
      }
  }
  //return result
};
console.log(twoSum([1,2,3,4],5))