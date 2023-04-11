const palindrome = (string) =>{
  for (let i=0; i<(string.length/2);i++){
    console.log(string[string.length-1])
    if (string[i] !== string[string.length-(i+1)])return false;
  }
  return true;
}

const result = palindrome("lol")
console.log(result)