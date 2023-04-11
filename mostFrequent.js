const mostFrequentChar  = string =>{
  const cache = {};
  let result = '';
  let max = -Infinity;
  for (let i = 0; i<string.length;i++){
    if (string[i] in cache){
      cache[string[i]]+=1;
    }else{
      cache[string[i]] = 1
    }
  }
  for(const key in cache){
    if(cache[key]>max){
      max= cache[key];
      result = key;
    }
  }
  console.log(cache)
  return result;
}

const test = mostFrequentChar("ctratto");
console.log(test)