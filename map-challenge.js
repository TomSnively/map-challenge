
// data is being read from the JSON file
//data = JSON.parse(data);
console.log(dataObject);
let data =
    {
        bay: [],
        city: [],
        continent: [],
        country: [],
        desert: [],
        gulf: [],
        lake: [],
        latitude: [],
        longitude: [],
        mountainRange: [],
        ocean: [],
        river: [],
        sea: [],
        state: [],
    };

function isLowercaseLetter(letter){
    //console.log('checking letter ' + letter);
    return letter === letter.toLowerCase();
}

function saveData(key, object){
    if (isLowercaseLetter(key[0]) && !isLowercaseLetter(object[0])) {
        //data[key] = object;
        data[key].push(object);
    }

}

function eachRecursive(obj, key) {

    let nextKey = "";
    for (var k in obj)
    {
        if (typeof obj[k] == "object" && obj[k] !== null) {
            if (isNaN(k)){
                console.log('is object, key, k are: ' + key +  ' and ' + k);
                if(isLowercaseLetter(k[0])) {
                    //console.log('object isLowercase - setting a key');
                    nextKey = k;
                } else {
                    saveData(key, k);
                }
            } else {

            }

            if (nextKey === "") {
                nextKey = key;
            }
            //console.log('about to recurse, next key is ' + nextKey);
            eachRecursive(obj[k], nextKey);
        } else {
            if (!isNaN(k)) {
                console.log('string: key, string are: ' + key +  ' and ' + obj[k]);
                if(isLowercaseLetter(obj[k][0])) {
                    //console.log('string isLowercase - setting a key');
                    nextKey = obj[k];
                } else {
                    saveData(key, obj[k]);
                }
            } else {
                //console.log('number, ignore?');
            }
        }
    }

}

eachRecursive(dataObject);

/*

let treeStack = [];

function eachRecursive(obj, isKey, objectType) {
    for (let k in obj) {
        if (typeof obj[k] === "string" && obj[k] !== null) {
            console.log('it is string, objectType, k are: ' + objectType, obj[k]);
            data[objectType].push(obj[k]);
            isKey = true;

        } else if (typeof obj[k] === "object" && obj[k] !== null){
            if (isNaN(k)) {
                isKey = !isKey;
                if (isKey) {
                    console.log('left side key, k = ' + k);
                    objectType = k;
                    treeStack.push(k);
                    console.log('just pushed, treeStack = ' + treeStack);
                } else {
                    console.log('right side object, objectType, k are: ', objectType, k);
                    data[objectType].push(k);
                }

            } else {
                //console.log('k is a number index (ignore), k = ' + k);
            }
            //console.log('about to go in again, k is ' + k);
            eachRecursive(obj[k], isKey, objectType);
            //isKey = !isKey;

        } else {
            console.log('error');

        }
    }                       // end of for loop, time to pop a level
    // ??
    if (!isKey || treeStack[3] === 'city') {
        // ??s
        if (treeStack[3] === 'city') isKey = true;
        treeStack.pop();
        objectType = treeStack[treeStack.length - 1];
        console.log('for loop over, we just popped. objectType = ' + objectType + ', treeStack = ' + treeStack);
    }
}

let isKey = false;
eachRecursive(dataObject, isKey, "");

/*
let data = {};
let thisLevel = "";

console.log('going through data now');
for (let x in dataObject) {
    if (typeof x === "string") {
        thisLevel = x;
        console.log('string', x);
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