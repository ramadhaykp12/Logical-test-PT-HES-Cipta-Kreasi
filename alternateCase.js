//Soal Logical Test No.3
alternateCase = (word) => {
  let result = '';
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === word[i]) {
      result += word[i].toUpperCase();
    } else {
      result += word[i].toLowerCase();
    }
  }
  return result;
}

console.log(alternateCase('abc')); // output: 'ABC'
console.log(alternateCase('ABC')); // output: 'abc'
console.log(alternateCase('Hello World')); // output: 'hELLO wORLD'