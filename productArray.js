//Soal Logical Test No.2
productArray = (arr) => {
  let n = arr.length;
  let kiri = new Array(n);
  let kanan = new Array(n);
  let product = new Array(n);

  // Hitung array product kiri 
  kiri[0] = 1;
  for (let i = 1; i < n; i++) {
    kiri[i] = kiri[i - 1] * arr[i - 1];
  }

  // Hitung array product kanan
  kanan[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    kanan[i] = kanan[i + 1] * arr[i + 1];
  }

  // // Hitung array product 
  for (let i = 0; i < n; i++) {
    product[i] = kiri[i] * kanan[i];
  }

  console.log(product);
}
productArray([12,20]); 
productArray([3,27,4,2]);