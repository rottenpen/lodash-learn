// Splits string into an array of its words.把string里的单词切割入一个数组里

// 参数
// [string=''] (string): The string to inspect.
// [pattern] (RegExp|string): The pattern to match words.
// [pattern] (RegExp|string) 匹配的部分也会拆分入数组里
// 返回值
// (Array): Returns the words of string.

// 例子
// _.words('fred, barney, & pebbles');
// // => ['fred', 'barney', 'pebbles']

// _.words('fred, barney, & pebbles', /[^, ]+/g);
// // => ['fred', 'barney', '&', 'pebbles']

import unicodeWords from './.internal/unicodeWords.js'
//将unicode字符串拆分为单词数组
const asciiWords = RegExp.prototype.exec.bind(
  /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g
)//返回匹配半角英文标点符号的数组

const hasUnicodeWord = RegExp.prototype.test.bind(
  /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/
)//数字 字母

function words(string, pattern) {
    if (pattern === undefined) {
      const result = hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string)
      return result || []
    }
    return string.match(pattern) || []
  }
  
  export default words