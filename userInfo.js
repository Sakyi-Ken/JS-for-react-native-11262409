import { processArray, formatArrayStrings } from "./arrayManipulation";

 function createUserProfiles(arrayOfStrings, newString) {
  const result = processArray(newString);
  formatArrayStrings(arrayOfStrings, result);
  const profiles = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    profiles.push({
      originalName: arrayOfStrings[i],
      modifiedName: result[i],
      id: i + 1
    });
  }
  return profiles;
}
console.log(formatArrayStrings(['John', 'Jane', 'Mike'], [2,5,8]));
console.log(createUserProfiles( `${arrayOfStrings} ${newString}`));