'use strict';

// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('zipcodes-small.csv')
// });

var zipEx = "00601-0245";
var rlp = require('readline-promise');
var fs  = require('fs');
// console.log(zipEx.split('-')[0])

// lineReader.on('line', function (line) {
//   var splitLine = line.split(',');
//   if (splitLine[0] === zip.split('-')[0]) {
//     console.log(splitLine[0]);
//   }
// });


const latLongLookup = function (zip) {
  let returnVal;
  let writer = fs.createWriteStream('output.txt')
  let myReader = rlp.createInterface({
    input: fs.createReadStream('zipcodes-small.csv'),
  }).each(function(line) {
      var currentZip = line.split(',')[0].replace(/"/g,"");;
      if (currentZip === zip) {
        let lat = line.split(',')[5];
        let long = line.split(',')[6];
        writer.write(`${lat}, ${long}`) // write to text file
        returnVal += line; // write to variable
      }
  }).then(function(count) {
      console.log(returnVal)
  })
};

const calculateDistance = function(origin, destination) {
  let x = 69.1 * (destination.lat - origin.lat)
  let y = 69.1 * (destination.long - origin.long) * Math.cos(origin.long/57.3)

  // returns distance in miles between two zip codes
  let distance = Math.sqrt((x * x) + (y * y))
  return distance;
  // if (distance > maxRadius) {
    // push zip2 to csv
  // }
}


let myOrigin = latLongLookup("00601");
console.log(myOrigin)
// console.log(myOrigin)
// let myDestination = latLongLookup("00705");
// let myDistance = calculateDistance(myOrigin, myDestination);
// console.log(myDistance)
