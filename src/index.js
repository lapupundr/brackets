module.exports = function check(str, bracketsConfig) {
  // your solution

	
  let bracketPair ={};
    
  bracketsConfig.forEach(element => {
    bracketPair[element[1]] = element[0];
  });
    
  let openBracketArr = Object.values(bracketPair);
  let closeBracketArr = Object.keys(bracketPair);

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    let currentBracket = str[i];
	  
	  
    if (openBracketArr.includes(currentBracket) ) {
      stack.push(currentBracket);
		if (stack.length > 1 && (stack[stack.length-1] === stack[stack.length-2]) && closeBracketArr.includes(currentBracket) ) { stack.pop(); stack.pop();}
    } else {
      if (stack.length === 0) return false;

		
      if (bracketPair[currentBracket] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false
      }
    }
      }
	console.log(stack);
return stack.length === 0;
  




}
