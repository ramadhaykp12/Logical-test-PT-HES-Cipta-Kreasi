//Soal Logical Test No.4
solution = (num) => {
  let sum = 0;

  for (let i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  console.log(sum);
}

solution(20);
