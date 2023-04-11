//Implement a bubble sort algorithm to sort an array of integers. What is the time complexity of your solution?

const bubble = array =>{
 for(let i =0; i<array.length; i++){
  for(let j = 0; j<array.length-i-1; j++){
    if(array[j]>array[j+1]){
      let hold = array[j];
      array[j] = array[j+1];
      array[j+1] = hold
    }
  }
 }
 return array
}

const test = bubble([2,5,3,7,6,1,0])
console.log(test)