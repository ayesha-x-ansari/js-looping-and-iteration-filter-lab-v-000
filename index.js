// Code your solution in this file
function findMatching(driverArray, name) {
   return driverArray.filter(function (driverName)
   { return driverName.toLowerCase() ===  name.toLowerCase() });
 }

 function fuzzyMatch(driverArray, partialName) {
    lengthOfPartialName  = partialName
    return driverArray.filter(function (driverName)
    { return driverName.slice(0,lengthOfPartialName).toLowerCase() ===  partialName.toLowerCase() });
  }
