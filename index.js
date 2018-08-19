// Code your solution in this file
function findMatching(driverArray, name) {
   return driverArray.filter(function (driverName)
   { return driverName.toLowerCase() ===  name.toLowerCase() });
 }
