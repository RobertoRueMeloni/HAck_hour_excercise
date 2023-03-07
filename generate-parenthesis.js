/*

Given n pairs of parentheses, write a function to generate all combinations of
well-formed parentheses.

For example, given n = 2, a solution set is:

[
  "(())",
  "()()"
]

Given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

Given n = 0, a solution set is:

[
  ""
]

*/

// const generateParentheses = n => {
//   // generate an object with parentesis
//   const options = {};
//   const result = [];
//   for(let i = 0; i<=n; i++){
//     options[i+'open'] = '(';
//     options[i+ 'close'] = ')'
//   }
// console.log(options)
//   for (let i=0; i<n; i++){
//     result.push(options[i+'open']+options[i+'close'])
//     result.push(options[i+'open'])
//   }
// return result;
// };

function generateParentheses(n) {
  let result = [];
  backtrack(result, "", 0, 0, n);
  
  function backtrack(result, current, open, close, max) {
    if (current.length === max * 2) {
      result.push(current);
      return;
    }

    if (open < max) backtrack(result, current + "(", open + 1, close, max);
    if (close < open) backtrack(result, current + ")", open, close + 1, max);
    }
  return result;
}
console.log(generateParentheses(5))
module.exports = {generateParentheses};