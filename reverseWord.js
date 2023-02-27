//Soal Logical Test No.6
reverseWords = (kata) => {
  const words = kata.split(' ');
  const reversedWords = words.map((word) => {
    const reversedLetters = word.split('').reverse().join('');
    const firstLetter = word.charAt(0);
    const reversedFirstLetter = firstLetter === firstLetter.toUpperCase() ? reversedLetters.charAt(0).toUpperCase() : reversedLetters.charAt(0);
    
    return reversedFirstLetter + reversedLetters.slice(1);
  }).reverse();

  console.log(reversedWords.join(' '));
}

reverseWords("I am Human");