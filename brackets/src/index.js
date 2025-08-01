module.exports = function check(str, bracketsConfig) {
  const obj = bracketsConfig.reduce((o, [k, v]) => Object.assign(o, { [k]: v }), {});
  const stack = [];

  for (const char of str) {
    if (char in obj && !stack.includes(char)) {
      stack.push(char);
    } else {
      obj[stack[stack.length - 1]] !== char ? stack.push(char) : stack.pop();
    }
  }

  return !stack.length;
};
