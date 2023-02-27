//Soal Logical Test No.5
NearestFibonacci = (arr) => {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);

  const fib = [0, 1];
  while (fib[fib.length - 1] < sum) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  let idx = fib.findIndex((num) => num >= sum);
  const nearestFib = idx === 0 ? fib[1] : Math.abs(fib[idx - 1] - sum) <= Math.abs(fib[idx] - sum) ? fib[idx - 1] : fib[idx];
  
  
  const diff1 = Math.abs(nearestFib - sum);
  const diff2 = Math.abs(fib[idx - 1] - sum);

  diff3 = diff1 <= diff2 ? nearestFib : fib[idx - 1];
  console.log(diff3);
}
let arr = [15,1,3]

NearestFibonacci(arr)
