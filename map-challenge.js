
// data is being read from the JSON file
//data = JSON.parse(data);
console.log(dataObject);

// continents
// country
// state or
// city and river
// then


let data = {};
let thisLevel = "";

console.log('going through data now');
for (let x in dataObject) {
    if (typeof x === "string") {
        thisLevel = x;
        console.log('string', x)
        nextLevel = Object.keys(dataObject[x])[0];

        // then replace the object with the data
//    tempLevel[x] = Object.keys(dataObject[x])[0];

    } else if (typeof x === "object") {
        console.log('object', x);

    }
}
/*


continents = data.continent;

function getDataLowerLevel (upperLevel) {
    let tempLevel = [];
    for (let x in upperLevel) {
        if (typeof upperLevel[x] === "object") {
            // here, grab the inside object, in this case countries
            countries = getDataLowerLevel(upperLevel[x]);

            // then replace the object with the data
            tempLevel[x] = Object.keys(upperLevel[x])[0];
        }
    }

    console.log(upperLevel);
    return upperLevel;
}


continents = getDataLowerLevel(continents);
console.log('at the end, continents', continents);


let test = {};

test['countries'] = ['China', 'UK', 'France'];
test['cities'] = ['Philly', 'Albany', 'Paris'];
*/