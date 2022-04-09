function add(stringNumbers)
    {
        const char = '//';
        if(stringNumbers.startsWith(char))
        {

          let delimiter;
          let numbersWithoutDelimiter = stringNumbers;
          let delimiterIndex = stringNumbers.indexOf("//") + 2;

          delimiter = stringNumbers.substring(delimiterIndex, delimiterIndex + 1);
          numbersWithoutDelimiter = stringNumbers.substring(stringNumbers.indexOf("n") + 1);

          let nuArray = numbersWithoutDelimiter.split(delimiter).map(n => parseInt(n, 10)) 
          return checkNan_NonNegative(nuArray);

       }
        else 
        {
          const numbers = stringNumbers
          .replace(/\r?\n/g, ',') 
          .split(',')  
          .map(n => parseInt(n, 10))  

          return checkNan_NonNegative(numbers);
  
         }
   }

    function checkNan_NonNegative(numArray)
      {
        if(numArray.some(n => Number.isNaN(n))) console.log("0");
        if(numArray.some(n => n < 0)) console.log('Negatives not allowed')

        // Add them all up
        return numArray.reduce((s, n) => s + n) 
      }

add("//*n3*6*15*1");
