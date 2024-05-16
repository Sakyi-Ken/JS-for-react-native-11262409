let newArray = [];
function processArray(arrayOfNumbers) {
   for (i = 0; i < arrayOfNumbers.length(); i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
      return newArray.push(arrayOfNumbers[i] * arrayOfNumbers[i]);
    }
    else {
      return newArray.push(3 * arrayOfNumbers[i])
    }
   }
}


function formatArrayStrings() {

}