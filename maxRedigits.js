//Soal Logical Test No.1
maxRedigit = (number) => {
  if (typeof number !== 'number' || number < 100 || number > 999) {
    return null;
  }
  const digits = Array.from(String(number), Number).sort((a, b) => b - a);

  console.log(parseInt(digits.join('')));
}
maxRedigit(123);
maxRedigit(231);
maxRedigit(321); 
maxRedigit(-1); 
maxRedigit(0); 
maxRedigit(99); 
maxRedigit(1000); 