/* -------------------------------------------

Made by Jozef Waldhauser
Using information from https://javascript.info
and other stackoverflow sources...

   -------------------------------------------  
   
   This program will generate a count of employees
   which will have pseudo-random names and birthdates.
   
   -------------------------------------------  
   */


//START OF USER EDITABLE PART ========================================

//Declaring input data - this data serves as an input for the program
const dtoIn = {
    count: 1500, //number of employees to be generated
    age: {
        min: 20, //minimum age of employee(s)
        max: 60  //maximum age of employee(s)
    }
};

//END OF USER EDITABLE PART ==========================================

   /*
   
   This program's input object is called dtoIn
   this object consists of:
   count - number of employees
   age.min - minimum age of employee(s)
   age.max - maximum age of employee(s)
   
   -------------------------------------------

   The output of this program is also an object
   it's called dtoOut, this object consists of:

   workload10 - n° of employees with 10hrs of workload
   workload20 - n° of employees with 20hrs of workload
   workload20 - n° of employees with 30hrs of workload
   workload20 - n° of employees with 40hrs of workload
   averageAge - average age of all employees
   averageWomenWorkload - average workload of female employees
   minAge - minimum age from dtoIn
   maxAge - maximum age from dtoIn
   medianAge - median of all ages
   medianWorkload - median of all workloads
   sortedByWorkload - object(s)/list of all employees, sorted by workload
   
*/ 

//Input error checking ---------------------------------------------------------
if(dtoIn.count < 0 ){   //if count is less than 0 (generate negative employees)
    const error = new Error("message")
    error.code = "Wrong Input Count!" //throw Wrong Input Count error
    throw error;

}else if(dtoIn.age.min <= 0){ //if age is less||equal than 0 (not born yet)
    const error = new Error("message")
    error.code = "Wrong Input Minimum Age!"//throw Wrong Input Age error
    throw error;
}else if(dtoIn.age.max > 150){  //if age is less than 150 (high probability of being dead)
    const error = new Error("message")
    error.code = "Wrong Input Maximum Age!" //throw Wrong Input Age error
    throw error;
}
// -----------------------------------------------------------------------------

//Declaring output data - this data serves as an intermediary for operations done in the program

let workload10 = 0;
let workload20 = 0;
let workload30 = 0;
let workload40 = 0;
let averageAge = 0;
let averageWomenWorkload = 0;
let minAge = dtoIn.age.min;
let maxAge = dtoIn.age.max;
let medianAge = 0;
let medianWorkload = 0;
let womenWorkLoad = 0;
let womenWorkCount = 0;
let sumOfAges = 0;
let agesList = [];
let workloadList = [];

// NAMES ARRAYS START ----------------------
//27 female and 27 male names & surnames

const maleNames = [
    "Adam",
    "Bedřich",
    "Kazimír",
    "Kamil",
    "Miroslav",
    "Tomáš",
    "Mojmir",
    "Jakub",
    "Samuel",
    "Michal",
    "Oliver",
    "Matěj",
    "Peter",
    "Šimon",
    "Patřik",
    "Richard",
    "Dávid",
    "Alex",
    "Josef",
    "Kvido",
    "Arnošt",
    "Hugo",
    "Dušan",
    "Vojtěch",
    "Čeněk",
    "Libor",
    "Ludvík",
];

const femaleNames = [
    "Gabriela",
    "Viktorie",
    "Anděla",
    "Růžena",
    "Miloslava",
    "Vanda",
    "Veronika",
    "Nela",
    "Erika",
    "Ema",
    "Marcela",
    "Alexandra",
    "Evžénie",
    "Jaroslava",
    "Olga",
    "Martina",
    "Drahomíra",
    "Marta",
    "Kristýna",
    "Petra",
    "Hana",
    "Helena",
    "Zlata",
    "Ludmila",
    "Sabina",
    "Renáta",
    "Silvie",
];

const maleSurnames = [
    "Novák",
    "Svoboda",
    "Novotný",
    "Dvořák",
    "Černý",
    "Procházka",
    "Kučera",
    "Veselý",
    "Horák",
    "Němec",
    "Marko",
    "Pokorný",
    "Pospíšil",
    "Král",
    "Jelínek",
    "Růžička",
    "Fiala",
    "Sedláček",
    "Kolář",
    "Urban",
    "Šimko",
    "Vaněk",
    "Kopecký",
    "Zeman",
    "Čech",
    "Malý",
    "Štěpánek",
    "Konečný",
    
];

const femaleSurnames = [
    "Nováková",
    "Svobodová",
    "Novotná",
    "Dvořáková",
    "Černá",
    "Procházková",
    "Kučerová",
    "Veselá",
    "Horáková",
    "Němcová",
    "Marková",
    "Pokorná",
    "Pospíšilová",
    "Králová",
    "Jelínková",
    "Růžičková",
    "Fialová",
    "Sedláčková",
    "Kolářová",
    "Urbanová",
    "Šimková",
    "Vaňková",
    "Kopecká",
    "Zemanová",
    "Čechová",
    "Malá",
    "Štěpánková",
    "Konečná",
];
// NAMES ARRAYS END -----------------------


//This function generates a pseudorandom number in the range min-max
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    //Math.random * maxGenNumber --> the hightest random it will make is x<maxGenNumber
    } 

//Median calculation based on https://www.statisticshowto.com/probability-and-statistics/statistics-definitions/median/
function medianCalculation(count,array){   
        
        if(count%2 == 0){
        medianOut = ( array[count/2] + array[(count/2) + 1] ) / 2;
        }
        if(count%3 == 0){
        medianOut = array[Math.floor(count/2)];
        }

        return medianOut;
}

//A function which outputs a string ("male" or "female"), based on a pseudorandom decision
function whatGender(){ 
    //outputs male or female gender
    if(getRandom(1,3)==1){ //checks if 1 then male if 2 then female
        return "male";
    }
    else {
        return "female";
    }
}

//A function which outputs a ISOstring birthdate based on the defined age-range input
function randomDateGenerator(ageMin, ageMax){
    let randomDay;     
    let birthYear = new Date().getFullYear()-getRandom(ageMin+1, ageMax+1);

    //This part of the function adds to global variables for median ages calculations and such
    //----------------------------------------------------------------------------------------
    sumOfAges = sumOfAges + new Date().getFullYear()-birthYear; //add to sum of ages global variable
    agesList.push(new Date().getFullYear()-birthYear); //add ages to array
    //----------------------------------------------------------------------------------------

    let randomMonth = getRandom(1,13);
    
    if(randomMonth == 2){ //check if it's a leap year and february
        if ((birthYear % 4 == 0) && ( birthYear % 100 != 0) || (birthYear % 400 == 0)) { //leap years are divisible by 4, 100 and 400
        randomDay = getRandom(1,30);} else {randomDay = getRandom(1,29);} //if leap year days=29 else days=28
    
    } 
    if(randomMonth == 1 || 3 || 5 || 7 || 8 || 10 || 12){ // these months have 31 days maximum
            randomDay = getRandom(1, 32);
        };
    
        if(randomMonth == 4 || 6 || 9 || 11){ //these months have 30 days maximum
            randomDay = getRandom(1, 31);
        };

     //check if age is actually minimum   
        
        let birthDate = new Date(randomMonth+' '+randomDay+' '+birthYear+' '+' '+getRandom(1,24)+':'+getRandom(1,60)+' UTC'); //write to string for ISO date output
    
        return birthDate.toISOString();
    };





    function main(dtoIn) {
 
        //Declare variables from dtoIn - pass variables from object
        let peopleCount = dtoIn.count;
        let ageMin = dtoIn.age.min;
        let ageMax = dtoIn.age.max;
        // --------------------------------------------------------
        
        //Declare variables for sorting 
        const unsortedEmployees = []; //make array for employees
        let sortedByWorkload = []; //make array for sorted by workload
        let infoEmployees = []; //make array for information and such
        let dtoOut = []; //this array will have information and then sorted employees stored in it
        const employees10 = []; //this array has the objects of all employees with 10 hour workloads
        const employees20 = []; //same as employees 10 but for 20hour workloads
        const employees30 = []; //same as employees 10 but for 30hour workloads
        const employees40 = []; //same as employees 10 but for 40hour workloads
        // ----------------------------


        //This mart of the main function generates the pseudorandom employees

        for(let i = 0; i < peopleCount; i++){ //iterate for entire count
        let employee = {}; //make object employee   
    
        employee.gender = whatGender(); //generate gender string from function
        employee.birthdate = randomDateGenerator(ageMin, ageMax); //call date function 
        employee.workload = getRandom(1,5)*10; //max is is actually 4
    
        workloadList.push(employee.workload);
    
        if(employee.gender == "male"){ //when male
        employee.name = maleNames[getRandom(0,maleNames.length)];
        employee.surname = maleSurnames[getRandom(0,maleSurnames.length)]; 
        }
        else
        { //when female 
        employee.name = femaleNames[getRandom(0,femaleNames.length)];
        employee.surname = femaleSurnames[getRandom(0,femaleSurnames.length)]; 

        //this part of the else statement adds to global variable for
        //average women's workload calculations
        // -----------------------------------------------
        womenWorkLoad = womenWorkLoad + employee.workload;
        womenWorkCount++;
        // -----------------------------------------------
        }   
        
        //This part of the main function sorts the employees to 4 arrays
        if(employee.workload == '10'){
            workload10 = workload10 + 1;
            employees10.push(employee);
    
            }
            else if(employee.workload == '20'){
            workload20 = workload20 + 1;  
            employees20.push(employee);  
            }
            else if(employee.workload == '30'){
            workload30 = workload30 + 1;
            employees30.push(employee);
            }
            else{
            workload40 = workload40 + 1;
            employees40.push(employee);
            }
         // -----------------------------------------------  
    
        unsortedEmployees.push(employee); //push employee into unsortedEmployees array
        
        };

         //Spread Syntax (spread turns array into a list of arguments)
         //https://javascript.info/rest-parameters-spread

        //This makes the sorted employees array
        sortedByWorkload = [...employees10, ...employees20, ...employees30, ...employees40];
           
        //This calculates all the averages
        averageAge = sumOfAges/peopleCount;
        averageWomenWorkload = womenWorkLoad/womenWorkCount;
        averageAge = parseInt(averageAge.toFixed(1)); //fixed floating point
        averageWomenWorkload = parseInt(averageWomenWorkload.toFixed(1)); //fixed floating point
       
        //This calculates the workload median
        workloadList.sort();
        medianWorkload = medianCalculation(peopleCount, workloadList);
        
        //This calculates the age median 
        agesList.sort();
        medianAge = medianCalculation(peopleCount, agesList);
    
        //Creating the infoEmployees object with all the needed output data/variables
        infoEmployees = {
             peopleCount,
             workload10,
             workload20,
             workload30,
             workload40,
             averageAge,         
             minAge,
             maxAge,
             medianAge,
             medianWorkload,
             averageWomenWorkload,      
             sortedByWorkload,
        };
    
        dtoOut.push(infoEmployees);
        //dtoOut.push(sortedByWorkload);
        
                                                  
             
        
        return dtoOut; //returns dtoOut object
        
    };

    const result = main(dtoIn); //result variable = main function output

//This part of the code makes sure that the nested object actually logs and doesn't output an inspector
const util = require('util'); 
console.log(util.inspect(result, {showHidden: false, depth: null, colors: true}));
//source: https://nodejs.org/api/util.html#util_util_inspect_object_options
// -----------------------------------------------------------------------------------------------------