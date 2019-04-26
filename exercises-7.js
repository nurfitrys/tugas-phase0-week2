// Exercises 7 Looping - Asteriks

// 1. Menyusun barisan bintang

for (i = 1; i <= 5; i++) {
  console.log('*');
}

// 2. Menyusun barisan bintang dengan nested LOOPING

for (i = 1; i <= 5; i++) {
  var bintang = '*';
  var j = 2;
  for (j = 2; j <= 5; j++) {
    bintang = bintang + '*';
  }
  console.log(bintang);
}

// 3. Menyusun  Barisan Tangga Bintang Dengan Nested Looping

for (i = 1; i <= 5; i++) {
  var piramid = '*';
  var j = 1;
  for (j = 1; j < i; j++) {
    piramid = piramid + '*';
  }
  console.log(piramid);
}