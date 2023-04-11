const anagram = (string1,string2)=>{
  function inner  (string) {
    const obj = {}
    for(let i = 0; i<string.length; i++){
      if (string[i] in obj){
        obj[string[i]+=1]
      }else{
        obj[string[i]] = 1
      }
    }
    return obj;
  }
 const obj1 = inner(string1);
 const obj2  = inner(string2);

 for( const key in obj1){
  if (obj1[key]!==obj2[key]) return false
 }
 for(const key in obj2){
  if (obj2[key] !== obj1[key]) return false
 }
 return true;
}

const test = anagram("lol", "lol")
console.log(test)