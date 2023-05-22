'use strict';

function BinarioADecimal(str) {
  if (str.constructor != String){
  return null;
  }
  str = str.replace(/[^01]/gi, "");
  return Number.parseInt(str, 2)
}

function DecimalABinario(num) {
  let binarioArray =[]
  while(num > 1){
  binarioArray.push(num % 2)
    num = Math.floor (num / 2)
  }
  binarioArray.push(num)
  return parseInt (binarioArray.reverse().join(""))
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};



/*
7 -> binario

7 / 2   7 % 2       1
3 / 2   3 % 2     1
1 / 2   1 % 2   1
0

1 1 1


6  -> binario

6 / 2   6 % 2        0
3 / 2   3 % 2      1
1 / 2   1 % 2   1
0

1 1 0
*/