import { formatArrayStrings } from "./arrayManipulation";

 function createUserProfiles(arrayOfStrings, newString) {
  const profiles = [];
  for (let i = 0; i < arrayOfStrings.length; i++) {
    profiles.push({
      originalName: arrayOfStrings[i],
      modifiedName: newString[i],
      id: i + 1
    });
  }
  return profiles;
}
console.log(formatArrayStrings(['John', 'Jane', 'Mike'], `${newArray}`));
console.log(createUserProfiles( `${arrayOfStrings} ${newString}`));