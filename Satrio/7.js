const data = [1, 4, 7, 9, 12];
const low = 2;
const high = 15;

const filteredData = data.filter((elem) => elem >= low && elem <= high);
const count = filteredData.length;
console.log(count); // output: 4
