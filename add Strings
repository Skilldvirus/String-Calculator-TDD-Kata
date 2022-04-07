function add(stringNumbers){

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
add("1/n,2");
