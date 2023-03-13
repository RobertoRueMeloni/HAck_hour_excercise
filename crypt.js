function decrypt(word) {
  // your code goes here
  //split the word in an array
  let arrayn = word.split('');
  //transform the char in a ascii
  const arrayA = []
  for (let i = 0; i<arrayn.length; i++){
    arrayA.push(arrayn[i].charCodeAt());
  }
  //increment the first item in the array by 1
  arrayA[0] += 1
  // loop the array and add the previous value to the index
  for (let i = 1; i<arrayn.length; i++){
    // retransform the array in char
    arrayA[i] += arrayA[i-1];
    while(arrayA[i]>122){
      arrayA[i] -= 26
    }
  }
let string = '';
for(let i = 0; i<arrayA.length; i++){
  
  string = string + String.fromCharCode(arrayA[i])
}
return string
}
decrypt('crime')