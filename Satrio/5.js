function convertToText(number) {
  let ones = ['', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas'];
  if (number === 0) {
    return 'nol';
  } else if (number < 0 || number > 100) {
    return 'silahkan masukkan bilangan 1-100';
  } else if (number < 12) {
    return ones[number];
  } else if (number < 20) {
    return ones[number - 10] + ' belas';
  } else if (number < 100) {
    let tens = Math.floor(number / 10);
    let onesDigit = number % 10;
    let result = ones[tens] + ' puluh';
    if (onesDigit > 0) {
      result += ' ' + ones[onesDigit];
    }
    return result;
  } else {
    return 'silahkan masukkan bilangan 1-100';
  }
}

console.log(convertToText(4)); // output: empat
console.log(convertToText(20)); // output: dua puluh
console.log(convertToText(39)); // output: tiga puluh sembilan
console.log(convertToText(104)); // output: silahkan masukkan bilangan 1-100
