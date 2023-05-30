/* 
    @link  https://www.nowcoder.com/practice/184edec193864f0985ad2684fbc86841
*/
function checkPassword(password) {
  if (password.length <= 8) {
    return "NG"; // 长度不符合要求
  }

  // 检查是否包含大小写字母、数字和其他符号
  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigit = /\d/.test(password);
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(password);

  const numConditions = [
    hasLowercase,
    hasUppercase,
    hasDigit,
    hasSpecialChar,
  ].filter(Boolean).length;
  if (numConditions < 3) {
    return "NG"; // 不满足包含至少三种字符类型的要求
  }

  // 检查是否包含长度大于2的重复子串
  for (let i = 0; i < password.length - 3; i++) {
    const substring = password.substr(i, 3);
    if (password.indexOf(substring, i + 3) !== -1) {
      return "NG"; // 存在重复子串
    }
  }

  return "OK"; // 符合要求
}


console.log(checkPassword("12345678")); // NG
console.log(checkPassword("123456789")); // NG
console.log(checkPassword("abcdefgH1")); // NG
console.log(checkPassword("abcdefgH#")); // OK
console.log(checkPassword("abcabcabc")); // NG
console.log(checkPassword("abcabcabC1")); // OK