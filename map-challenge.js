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
let timerRunning = false;
let startTime;
let timerVar;
const clockLength = 60;
let leftToFind;

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
    for (let k in obj)
    {
        if (typeof obj[k] === "object" && obj[k] !== null) {
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

function startMapChallenge(button) {
    //console.log('clicked Go or Restart');

    document.querySelector(button).hidden = true;

    document.getElementById("message1").innerHTML = "";
    document.getElementById("message2").innerHTML = "";
    document.getElementById("message3").innerHTML = "";
    document.getElementById("message4").innerHTML = "";
    document.getElementById("message5").innerHTML = "";

    document.querySelector('#array1').hidden = false;
    document.querySelector('#array2').hidden = false;
    document.querySelector('#array3').hidden = false;
    document.querySelector('#array4').hidden = false;
    document.querySelector('#array5').hidden = false;


    document.getElementById("array1").disabled = false;
    document.getElementById("array2").disabled = false;
    document.getElementById("array3").disabled = false;
    document.getElementById("array4").disabled = false;
    document.getElementById("array5").disabled = false;

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

    leftToFind = 5;

    startTime = new Date();
    let timer = document.querySelector('#timer');
    timer.innerHTML = clockLength + " seconds";

    timerRunning = true;
    timerVar = setInterval(timeInterval, 1000);
}

function timeInterval (){
    let currentTime = new Date();
    let secondsLeft = clockLength - ((currentTime - startTime) / 1000);

    let timer = document.querySelector('#timer');
    timer.innerHTML = Math.round(secondsLeft) + " seconds";
    if (secondsLeft < 10) {
        timer.style.color = 'red';
    }

    if (secondsLeft < 0) {
        timerRunning = false;
        timeRanOut();
    }
}

function timeRanOut(){
    //console.log('time ran out!');
    clearInterval(timerVar);
    let timer = document.querySelector('#timer');
    timer.innerHTML = 'Time ran out!';

    document.getElementById("array1").disabled = true;
    document.getElementById("array2").disabled = true;
    document.getElementById("array3").disabled = true;
    document.getElementById("array4").disabled = true;
    document.getElementById("array5").disabled = true;

    document.getElementById("restart").hidden = false;
}

function addToArray(arraySoFar, newArray){
    for (let x = 0; x < newArray.length; x++) {
        arraySoFar.push(newArray[x]);
    }
    return arraySoFar;
}

function displayAllData(fieldName, dataArray){
    let html = "";
    for (let i = 0; i < dataArray.length; i++){
        html += '<option>' + dataArray[i] + '</option>\n';
    }
    document.getElementById(fieldName).innerHTML = html;
}

function foundItem(buttonID){
    let button = document.getElementById(buttonID);
    //console.log (button);
    let itemData = button.value;
    //console.log(itemData);
    let number = buttonID[buttonID.length-1];
    //console.log(number);
    let message = document.getElementById("message" + number);
    button.hidden = true;
    message.innerHTML = 'Found "' + itemData + '"';
    leftToFind--;

    if (leftToFind === 0) {
        //console.log('Found them all!');
        timerRunning = false;
        clearInterval(timerVar);
        let timer = document.querySelector('#timer');
        timer.innerHTML = 'You did it!';
        timer.style.color = 'green';
        document.getElementById("restart").hidden = false;
    }
}

document.getElementById("clockLength").innerText = clockLength;

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

displayAllData('displayAllArray1', array1);
displayAllData('displayAllArray2', array2);
displayAllData('displayAllArray3', array3);
displayAllData('displayAllArray4', array4);
displayAllData('displayAllArray5', array5);
