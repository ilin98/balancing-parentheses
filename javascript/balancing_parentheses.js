function balancingParentheses(string) {
  let splitString = string.split('');
  let diff = 0;
  for (const char of splitString) {
    if (char === '(') {
      diff++;
    } else {
      diff--;
    }
  }
  return Math.abs(diff)

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
