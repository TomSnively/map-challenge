
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
