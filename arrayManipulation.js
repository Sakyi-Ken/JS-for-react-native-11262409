import { createUserProfiles } from "./userInfo";

let newArray = [];
function processArray(arrayOfNumbers) {;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 === 0) {
       newArray.push(arrayOfNumbers[i] * arrayOfNumbers[i]);
    }
    else {
      newArray.push(3 * arrayOfNumbers[i]);
    }
   }
   return newArray;
}

console.log(processArray([1,2,5,8]));


function formatArrayStrings(arrayOfStrings, newArray) {
  let newString = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    if (newArray[i] % 2 === 0) {
      newString.push(arrayOfStrings[i].toUpperCase());
    } else {
      newString.push(arrayOfStrings[i] = arrayOfStrings[i].toLowerCase());
    }
  }
  return newString;
}

const names = ['John', 'Jane', 'Mike'];
const modifiedNames = ['JOHN', 'jane', 'MIKE'];
const profiles = createUserProfiles(names, modifiedNames);
console.log(profiles);
