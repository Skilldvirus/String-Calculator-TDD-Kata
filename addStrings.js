function add(stringNumbers){

  if(stringNumbers.startWith("//")){
       const char = '//';
  if(stringNumbers.startsWith(char)){
      let delimiter;
    let numbersWithoutDelimiter = stringNumbers;
      let delimiterIndex = stringNumbers.indexOf("//") + 2;
      delimiter = stringNumbers.substring(delimiterIndex, delimiterIndex + 1);
      numbersWithoutDelimiter = stringNumbers.substring(stringNumbers.indexOf("n") + 1);

let nuArray = numbersWithoutDelimiter.split(delimiter).map(n => parseInt(n, 10));
if(nuArray.some(n => Number.isNaN(n))) console.log("0");
  if(nuArray.some(n => n < 0)) console.log('Negatives not allowed');
  return nuArray.reduce((s, n) => s + n)
  }
  else {
  const numbers = stringNumbers
    .replace(/\r?\n/g, ',') // Normalize delimiter
    .split(',')                     // Split values
    .map(n => parseInt(n, 10))      // Convert to integers

  // Check if numbers are ok.
  
  if(numbers.some(n => Number.isNaN(n))) console.log("0");
  if(numbers.some(n => n < 0)) console.log('Negatives not allowed')

  // Add them all up
  return numbers.reduce((s, n) => s + n)
  }
}
add("//;n3;6;15");
