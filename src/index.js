module.exports = function check(str, bracketsConfig) {
  // your solution
  // console.log (bracketsConfig);

 let check = '';
  bracketsConfig.forEach(element => {
    if (element.includes('(')) { check ='true' }
  });
    // console.log(check);
	
 const openBracketArr = ['(', '{', '['];
  const bracketPair = {
    [')']: '(',
    ['}']: '{',
	[']']: '['
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
	// console.log (bracketsConfig.includes(currentBracket));
    if (openBracketArr.includes(currentBracket) && check === 'true') {
      stack.push(currentBracket);
    } else {
      if (stack.length === 0) return false;

      let topStackBracket = stack[stack.length - 1];
      if (bracketPair[currentBracket] === topStackBracket) {
        stack.pop();
      } else {
        return false
      }
    }
      }
return stack.length === 0;

}
