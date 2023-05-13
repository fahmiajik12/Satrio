function hitungFaktorial(n) {
  let faktorial = 1;
  
  for (let i = n; i > 0; i--) {
    faktorial *= i;
  }
  
  return faktorial;
}

console.log(hitungFaktorial(4)); // Output: 24
console.log(hitungFaktorial(8)); // Output: 40320