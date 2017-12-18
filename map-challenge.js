// data is being read from the JSON file

//console.log(dataObject);
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
                //console.log('is object, key, k are: ' + key +  ' and ' + k);
                if(isLowercaseLetter(k[0])) {
                    //console.log('object isLowercase - setting a key');
                    nextKey = k;
                } else {
                    saveData(key, k);
                }
            } else {
                // don't think we ever get here
            }

            if (nextKey === "") {
                nextKey = key;
            }
            //console.log('about to recurse, next key is ' + nextKey);
            eachRecursive(obj[k], nextKey);
        } else {
            if (!isNaN(k)) {
                //console.log('string: key, string are: ' + key +  ' and ' + obj[k]);
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

function startMapChallenge() {
    console.log('clicked Go');
    let rand1 = Math.floor(Math.random() * array1.length);
    let rand2 = Math.floor(Math.random() * array2.length);
    let rand3 = Math.floor(Math.random() * array3.length);
    let rand4 = Math.floor(Math.random() * array4.length);
    let rand5 = Math.floor(Math.random() * array5.length);

    document.querySelector('#array1').value = array1[rand1];
    document.querySelector('#array2').value = array2[rand2];
    document.querySelector('#array3').value = array3[rand3];
    document.querySelector('#array4').value = array4[rand4];
    document.querySelector('#array5').value = array5[rand5];

}


eachRecursive(dataObject);

// set up 5 arrays for displaying
let array1 = [];
let array2 = [];
let array3 = [];
let array4 = [];
let array5 = [];

array1 = data.country;
array2 = data.city;
array3 = data.state;

function addToArray(arraySoFar, newArray){
    for (let x = 0; x < newArray.length; x++) {
        arraySoFar.push(newArray[x]);
    }
    return arraySoFar;
}

array4 = addToArray(data.ocean, array4);
array4 = addToArray(data.sea, array4);
array4 = addToArray(data.river, array4);
array4 = addToArray(data.lake, array4);
array4 = addToArray(data.bay, array4);

array5 = addToArray(data.continent, array5);
array5 = addToArray(data.mountainRange, array5);
array5 = addToArray(data.desert, array5);
array5 = addToArray(data.longitude, array5);
array5 = addToArray(data.latitude, array5);
