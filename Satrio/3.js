function printDigitValue(str) {
    let digitValue = "";
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
      if (!isNaN(str[i])) {
        digitValue += str[i];
        count++;
      } else if (str[i] === ".") {
        let zeros = 7 - count;
        digitValue += "0".repeat(zeros);
        count = 0;
      } else {
        let zeros = 7 - count;
        digitValue += "0".repeat(zeros);
        count = 0;
      }
    }
    
    let result = digitValue.match(/\d{1,7}/g);
    
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
    }
  }
  
  printDigitValue("9.86-A5.321");
  