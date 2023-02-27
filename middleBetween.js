//Soal Logical Test No.7
MiddleBetween = (firstLetter, lastLetter) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(firstLetter);
  const endIndex = alphabet.indexOf(lastLetter);

  if (startIndex < 0 || endIndex < 0) {
    return "Invalid input";
  }

  let middleLetters = "";

  for (let i = startIndex; i <= endIndex; i++) {
    middleLetters += alphabet[i];
  }

  if (middleLetters.length === 1) {
    return middleLetters;
  }

  let firstMiddleIndex = Math.floor(middleLetters.length / 2) - 1;
  let lastMiddleIndex = Math.ceil(middleLetters.length / 2);

  console.log(middleLetters.slice(firstMiddleIndex, lastMiddleIndex + 1));
}                            

MiddleBetween("Q", "U"); 
MiddleBetween("R", "U"); 