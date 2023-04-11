//Given an array of integers, find the longest increasing subsequence. What is the time complexity of your solution?

const longestcount = array =>{
  const result = [array[0]];
  let hold = [array[0]]
  for (let i=1; i<array.length; i++){
    console.log("hi")
    if (array[i] > hold[hold.length - 1]) {
     
      hold.push(array[i]);
      if (hold.length > result.length) {
      result.splice(0, result.length, ...hold)
    }
  }else{
    hold = [array[i]]
  }
}
  return result;
}


const test = longestcount([10,9,0,1,2,5,6,7,8,7,9])
console.log(test)