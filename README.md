# zipcode-distances

Database of zip codes from http://federalgovernmentzipcodes.us/

Distance calculation converted from this [Stack Overflow](http://stackoverflow.com/questions/4190154/given-coordinates-how-do-i-get-all-the-zip-codes-within-a-10-mile-radius) example into Javascript


JavaScript pseudocode to generate list zips outside radius of origin
```
let maxRadius = 200;

// for each beginning origin
let lat1 = "blah";
let long1 = "blah";
let zip1 = "blah";


// for each destination
let lat2 = "blah";
let long2 = "blah";
let zip = "blah";

let x = 69.1 * (lat2 - lat1)
let y = 69.1 * (lon2 - lon1) * Math.cos(lat1/57.3)

// returns distance in miles between two zip codes
let distance = Math.sqrt((x * x) + (y * y))

if (distance > maxRadius) {
  // push zip2 to csv
}
```

JavaScript to read CSV file
```
var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('file.in')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
});

```

Run like so to save console log output to a file:
```
node app.js > log.csv
```
