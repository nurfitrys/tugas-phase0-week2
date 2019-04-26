// Exercises 11 - Balik Kata

function balikKata(kata) {
  var baru = '';
  for (i = kata.length - 1; i >= 0; i--) {
    baru += kata [i];
  }
  return baru;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));