/* -------------------------------------------

Made by Jozef Waldhauser
Using information from https://javascript.info
and other stackoverflow sources...

   -------------------------------------------   */ 

//this is the input data to the program
const dtoIn = {
    count: 5,
    age: {
        min: 20,
        max: 60
    }
};





if(dtoIn.count < 0 ){   //if count is less than 0 (generate negative employees)
    const error = new Error('message')
    error.code = 'Wrong Input Count!' //throw Wrong Input Count error
    throw error;

}else if(dtoIn.age.min <= 0){ //if age is less||equal than 0 (not born yet)
    const error = new Error('message')
    error.code = 'Wrong Input Minimum Age!'//throw Wrong Input Age error
    throw error;
}else if(dtoIn.age.max > 150){  //if age is less than 150 (high probability of being dead)
    const error = new Error('message')
    error.code = 'Wrong Input Maximum Age!' //throw Wrong Input Age error
    throw error;
}



// NAMES START ----------------------
//27 female and 27 male names & surnames

const maleNames = [
    'Adam',
    'Bedřich',
    'Kazimír',
    'Kamil',
    'Miroslav',
    'Tomáš',
    'Mojmir',
    'Jakub',
    'Samuel',
    'Michal',
    'Oliver',
    'Matěj',
    'Peter',
    'Šimon',
    'Patřik',
    'Richard',
    'Dávid',
    'Alex',
    'Josef',
    'Kvido',
    'Arnošt',
    'Hugo',
    'Dušan',
    'Vojtěch',
    'Čeněk',
    'Libor',
    'Ludvík',
];

const femaleNames = [
    'Gabriela',
    'Viktorie',
    'Anděla',
    'Růžena',
    'Miloslava',
    'Vanda',
    'Veronika',
    'Nela',
    'Erika',
    'Ema',
    'Marcela',
    'Alexandra',
    'Evžénie',
    'Jaroslava',
    'Olga',
    'Martina',
    'Drahomíra',
    'Marta',
    'Kristýna',
    'Petra',
    'Hana',
    'Helena',
    'Zlata',
    'Ludmila',
    'Sabina',
    'Renáta',
    'Silvie',
];

const maleSurnames = [
    'Novák',
    'Svoboda',
    'Novotný',
    'Dvořák',
    'Černý',
    'Procházka',
    'Kučera',
    'Veselý',
    'Horák',
    'Němec',
    'Marko',
    'Pokorný',
    'Pospíšil',
    'Král',
    'Jelínek',
    'Růžička',
    'Fiala',
    'Sedláček',
    'Kolář',
    'Urban',
    'Šimko',
    'Vaněk',
    'Kopecký',
    'Zeman',
    'Čech',
    'Malý',
    'Štěpánek',
    'Konečný',
    
];

const femaleSurnames = [
    'Nováková',
    'Svobodová',
    'Novotná',
    'Dvořáková',
    'Černá',
    'Procházková',
    'Kučerová',
    'Veselá',
    'Horáková',
    'Němcová',
    'Marková',
    'Pokorná',
    'Pospíšilová',
    'Králová',
    'Jelínková',
    'Růžičková',
    'Fialová',
    'Sedláčková',
    'Kolářová',
    'Urbanová',
    'Šimková',
    'Vaňková',
    'Kopecká',
    'Zemanová',
    'Čechová',
    'Malá',
    'Štěpánková',
    'Konečná',
];
// NAMES END -----------------------

//This function generates a pseudorandom number in the range min-max
function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    } //Math.random * maxGenNumber --> the hightest random it will make is x<maxGenNumber

//A function which outputs a string ('male' or 'female'), based on a pseudorandom decision    
function whatGender(){ //outputs male or female gender
    if(getRandom(1,3)==1){ //checks if 1 then male if 2 then female
        return 'male';
    }
    else {
        return 'female';
    }
}

function namesCount(array){ //this function counts how many times a value appears in an array
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


//A function which outputs a ISOstring birthdate based on the defined age-range input
function randomDateGenerator(ageMin, ageMax){ //function gets input: min age and max age and outputs ISO date
    let randomDay;     
    let birthYear = new Date().getFullYear()-getRandom(ageMin+1, ageMax+1);
    let randomMonth = getRandom(1,13);
    
    if(randomMonth == 2){ //check if it's a leap year and february
        if ((birthYear % 4 == 0) && ( birthYear % 100 != 0) || (birthYear % 400 == 0)) { //leap years are divisible by 4, 100 and 400
        randomDay = getRandom(1,30);} else {randomDay = getRandom(1,29);} //if leap year days=29 else days=28
    
    } 
    if(randomMonth == 1 || 3 || 5 || 7 || 8 || 10 || 12){ // these months have 31 days maximum
            randomDay = getRandom(1, 32);
        }
    
        if(randomMonth == 4 || 6 || 9 || 11){ //these months have 30 days maximum
            randomDay = getRandom(1, 31);
        }

     //check if age is actually minimum   
        
        let birthDate = new Date(randomMonth+' '+randomDay+' '+birthYear+' '+' '+getRandom(1,24)+':'+getRandom(1,60)+' UTC'); //write to string for ISO date output
    
        return birthDate.toISOString();
    }
    



    function main(dtoIn) {
    
    //Declare variables from dtoIn - pass variables from object
    let peopleCount = dtoIn.count; 
    let ageMin = dtoIn.age.min;
    let ageMax = dtoIn.age.max;
    // --------------------------------------------------------
    
    //Declare variables for sorting 
    
    const mainOutputArray = []; //make output data array
    const allNames = [];
    const allMales = [];
    const allFemales = [];
    const femaleWorkLoads = [];
    const maleWorkLoads = [];
    const allNamesWorkload = [];
    const allGenders = [];

 
    


    for(let i = 0; i < peopleCount; i++){ //iterate for entire count
    let employee = {}; //make object employee   

    employee.gender = whatGender(); //generate gender string from function
    allGenders.push(employee.gender);
    employee.birthdate = randomDateGenerator(ageMin, ageMax); //call date function 
    employee.workload = getRandom(1,5)*10; //max is is actually 4

    if(employee.gender == 'male'){ //when male
    employee.name = maleNames[getRandom(0,maleNames.length)];
    employee.surname = maleSurnames[getRandom(0,maleSurnames.length)]; 
    allMales.push(employee.name);
    maleWorkLoads.push(employee.workload);
    }
    else
    { //when female 
    employee.name = femaleNames[getRandom(0,femaleNames.length)];
    employee.surname = femaleSurnames[getRandom(0,femaleSurnames.length)]; 
    allFemales.push(employee.name);
    femaleWorkLoads.push(employee.workload);
    } 
    allNames.push(employee.name);
    allNamesWorkload.push(employee.workload);

    //push employee into mainOutputArray array
    };
    



//console.log(Object.keys(allNames));

// SOURCE: https://stackabuse.com/count-number-of-element-occurrences-in-javascript-array/


    const maleNamesCount = namesCount(allMales);
    const femaleNamesCount = namesCount(allFemales);
    const allNamesCount = namesCount(allNames);
    let arrayFemalePartTime = [];
    let arrayMaleFullTime = [];

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
    
    //console.log(allNamesCount);
    let all = Object.assign({}, allNamesCount);
    let male = Object.assign({}, maleNamesCount);
    let female = Object.assign({}, femaleNamesCount);
    let femalePartTime = Object.assign({}, namesCount(arrayFemalePartTime));
    let maleFullTime = Object.assign({}, namesCount(arrayMaleFullTime));
       
   names = {
    all, 
    male, 
    female,
    femalePartTime,
    maleFullTime,
   }

   mainOutputArray.push('names:', names);

   function arrayToObject(arrayInput){
    let keys = Object.keys(arrayInput);
    let values = Object.values(arrayInput);
    let keysNvalues = [];
    


    for(let i=0; i<keys.length; i++){
        keysNvalues.push({
         label: keys[i],
         value: values[i]
        });
     }
   
    return keysNvalues;

    }

      
   all = arrayToObject(allNamesCount);  
   male = arrayToObject(maleNamesCount);
   female = arrayToObject(femaleNamesCount);
   femalePartTime = arrayToObject(femalePartTime);
   maleFullTime = arrayToObject(maleFullTime);

   chartData = {
    all,
    male,
    female,
    femalePartTime,
    maleFullTime,
   };

   mainOutputArray.push('chartData:',chartData);
    
    
    const dtoOut = {
        names,
        chartData,
    }

   return dtoOut;

}



const result = main(dtoIn); //result variable = main function output

const util = require('util'); 
console.log(util.inspect(result, {showHidden: false, depth: null, colors: true}));
//source: https://nodejs.org/api/util.html#util_util_inspect_object_options