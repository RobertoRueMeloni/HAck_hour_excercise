/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "". (Note: All given inputs are in lowercase letters a-z.)

ex: longestCommonPrefix(["flower","flow","flight"]) --> "fl"

longestCommonPrefix(["dog","racecar","car"]) --> "" (There is no common prefix among the input strings)

*/

const longestCommonPrefix = (strs) => {
  // declare the char 
  let char = strs[0][0]
  //get the string[0] first char
  //declare the result as empty string
  let result = ''
  //loop the array
  for(let i = 1; i<strs.lenght; i++){
    for (let j = 0; i<strs[0].lenght;i++){
      char = strs[0][j];
      console.log(char)
      if(strs[i][j]!== char) return result
      result += char;
    }
  }
  return result;
};
console.log(longestCommonPrefix(["flower","flow","flight"]))

module.exports = { longestCommonPrefix };