function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} adalah tahun kabisat`;
  } else {
    return `${year} bukan tahun kabisat`;
  }
}

console.log(isLeapYear(2021)); // output: 2021 bukan tahun kabisat
console.log(isLeapYear(2024)); // output: 2024 adalah tahun kabisat

