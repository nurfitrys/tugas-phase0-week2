// Exercises 13 - Logic Challenge X dan O

function xo(str){
  
var x = 0;
var o = 0;
  
for (var i = str.length - 1; i >= 0; i--){
  if (str[i] == 'x'){
    x += 1;
  }
  else if (str[i] == 'o'){
    o += 1;
  }
}
  
if (x == o) {
  return true
}
else {
  return false
}
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
