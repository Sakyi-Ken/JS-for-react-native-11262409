let newArray = [];
function processArray(arrayOfNumbers) {
   for (i = 0; i < arrayOfNumbers.length(); i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      return newArray.push(arrayOfNumbers[i] * arrayOfNumbers[i]);
    }
    else {
      return newArray.push(3 * arrayOfNumbers[i]);
    }
   }
}


function formatArrayStrings(arrayOfStrings, arrayOfNumbers) {
  const result = processArray(arrayOfNumbers);
  for (i = 0; i < arrayOfStrings.length(); i++) {
    if (result[i] % 2 === 0) {
      arrayOfStrings[i].capitalize();
    } else {
      arrayOfStrings[i].lowercase();
    }
  }
}