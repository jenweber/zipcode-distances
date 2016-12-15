'use strict';

// var lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('zipcodes-small.csv')
// });

var zipEx = "00601-0245";
// console.log(zipEx.split('-')[0])

// lineReader.on('line', function (line) {
//   var splitLine = line.split(',');
//   if (splitLine[0] === zip.split('-')[0]) {
//     console.log(splitLine[0]);
//   }
// });


const latLongLookup = function (zip) {
  var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('zipcodes-small.csv')
  });
  lineReader.on('line', function (line) {
    var currentZip = line.split(',')[0].replace(/"/g,"");;
    if (currentZip === zip) {
      let lat = line.split(',')[5];
      let long = line.split(',')[6];
      console.log({lat:lat, long:long})
      return {lat:lat, long:long}
    }
  });
  // lineReader.close();
  return lineReader.output;
}
let something = latLongLookup("00601")
console.log(latLongLookup("00601"))
