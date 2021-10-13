/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let operator = '';
  let strArr = [];
  let result = '';
  if (tokens.length === 1) {
    return tokens[0];
  }
  for (let i = 0; i < tokens.length; i += 1) {
    if (!isNaN(tokens[i])) {
      strArr.push(parseInt(tokens[i]) < 0 ? '(' + tokens[i] + ')' : tokens[i]);
    } else {
      let number1 = strArr[strArr.length - 2];
      let number2 = strArr[strArr.length - 1];
      result =
        tokens[i] === '/'
          ? eval('~~(' + number1 + tokens[i] + number2 + ')').toString()
          : eval(number1 + tokens[i] + number2).toString();
      strArr.pop();
      strArr.pop();
      strArr.push(result < 0 ? '(' + result + ')' : result);
    }
  }
  return result;
};
