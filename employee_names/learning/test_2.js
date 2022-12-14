/*const allNames = [
    'Vojtěch', 'Adam',
    'Hugo',    'Hana',
    'Arnošt',  'Miloslava',
    'Ema',     'Erika',
    'Hugo',    'Nela',
    'Kamil',   'Adam',
    'Tomáš',   'Dávid',
    'Vanda',   'Kazimír',
    'Sabina',  'Hana'
  ];

  let namesCount = [];

for (let thisName of allNames) {
    if (namesCount[thisName] == 1) {
        namesCount[thisName] += 1;
    } else {
        namesCount[thisName] = 1;
    }
    }

    console.log(namesCount);
    
*/
function namesCount(array){
    let outputArray = [];
for (let thisName of array) {
    if (outputArray[thisName] == 1) {
        outputArray[thisName] += 1;
    } else {
        outputArray[thisName] = 1;
    }
    }

    return outputArray;
}


const allGenders = [ 'male', 'male', 'male', 'male', 'female' ];
const allNamesWorkload = [ 10, 10, 40, 40, 40 ];
const allNames = [ 'Kazimír', 'Hugo', 'Vojtěch', 'Alex', 'Erika' ];
let arrayFemalePartTime = [];
let arrayMaleFullTime = []

for(let i=0; i<=allNames.length; i++){
    //Female Part-time

    if(allGenders[i] == 'female' && allNamesWorkload[i] != 40){
        arrayFemalePartTime[arrayFemalePartTime.length + 1] = allNames[i];
    } else if(allGenders[i] == 'male' && allNamesWorkload[i] == 40){
        arrayMaleFullTime[arrayMaleFullTime.length + 1] = allNames[i];
    }
}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#parameters

arrayMaleFullTime = arrayMaleFullTime.filter(
    function( element ) {
    return element !== undefined; //this iterative function has a callback function , which is defined in the brackets 
                        }         //since its iterative it goes through all the elements and only returns if the element is not undefined
 );                               //which is exactly what i need

 arrayFemalePartTime = arrayFemalePartTime.filter(function( element ) {
    return element !== undefined;
 });



 
let maleFullTime = namesCount(arrayMaleFullTime);



    
    

    //i need to output an object with the name as the label and count as the value
    //namesCount function outputs the name as the key and value as the count
    //so i need to put key as constructor label and value as constructor value
    
    function arrayToObject(arrayInput){
    
    let label, value;
    let keysNvalues = [];
    
    outputObject = { //these values are undefined and when you're pushing them, you have to change the object not the variable
        label,
        value
    }

    let keys = Object.keys(arrayInput);
    let values = Object.values(arrayInput);
    
    console.log(keys[0], keys[1]);

    for(let i=0; i<keys.length; i++){
       keysNvalues.push({
        label: keys[i],
        value: values[i]
       });
    }
   
    console.log(keysNvalues);

    }

    arrayToObject(maleFullTime);



