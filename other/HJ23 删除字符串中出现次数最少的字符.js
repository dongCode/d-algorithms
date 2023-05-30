/* 
    @link  https://www.nowcoder.com/practice/05182d328eb848dda7fdd5e029a56da9
*/
function removeLeastFrequentChars(str) {
    // 统计每个字符出现的次数
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // 找到出现次数最少的字符的次数
    const minCount = Math.min(...Object.values(charCount));

    // 删除出现次数最少的字符
    const result = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char] !== minCount) {
            result.push(char);
        }
    }

    return result.join("");
}

console.log(removeLeastFrequentChars('assssa'))