/* -------------------------------------------

Made by Jozef Waldhauser
Using information from https://javascript.info
and other stackoverflow sources...

   -------------------------------------------   */ 

//this is the input data to the program
const dtoIn = {
    count: 10,
    age: {
        min: 20,
        max: 60
    }
};

//output data declaration
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
// --------------------

//temporary/work data declaration
let womenWorkLoad = 0;
let womenWorkCount = 0;
let sumOfAges = 0;
let agesList = [];
let workloadList = [];
// --------------------

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

// NAMES START ----------------------
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
// NAMES END -----------------------

function getRandom(min, max) {
    //random function using math.random()
      return Math.floor(Math.random() * (max - min)) + min;
    } //Math.random * maxGenNumber --> the hightest random it will make is x<maxGenNumber

function whatGender(){ //outputs male or female gender
    if(getRandom(1,3)==1){ //checks if 1 then male if 2 then female
        return "male";
    }
    else {
        return "female";
    }
}

function randomDateGenerator(ageMin, ageMax){ //function gets input: min age and max age and outputs ISO date
    let randomDay;     
    let birthYear = new Date().getFullYear()-getRandom(ageMin+1, ageMax+1);

    sumOfAges = sumOfAges + new Date().getFullYear()-birthYear; //add to sum of ages global variable
    agesList.push(new Date().getFullYear()-birthYear); //add ages to array

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
    

    function medianCalculation(count,array){   
        
        if(count%2 == 0){
        medianOut = ( array[count/2] + array[(count/2) + 1] ) / 2;
        }
        if(count%3 == 0){
        medianOut = array[floor(count/2)];
        }

        return medianOut;
    }

    function main(dtoIn) {
 
    //input data from dtoIn
    let peopleCount = dtoIn.count; //pass variables from object
    let ageMin = dtoIn.age.min;
    let ageMax = dtoIn.age.max;
    
    const unsortedEmployees = []; //make array for employees
    let sortedByWorkload = []; //make array for sorted by workload
    let infoEmployees = []; //make array for workloads and such
    let dtoOut = []; //this array will have workloads and then sorted employees stored in it
    const employees10 = [];
    const employees20 = [];
    const employees30 = [];
    const employees40 = [];
    

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
    womenWorkLoad = womenWorkLoad + employee.workload;
    womenWorkCount++;
    } 

    



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
       

    unsortedEmployees.push(employee); //push employee into unsortedEmployees array
    
    

};
    /*
    sortedByWorkload.push(workload10);
    sortedByWorkload.push(workload20);
    sortedByWorkload.push(workload30);
    sortedByWorkload.push(workload40);

    sortedByWorkload = sortedByWorkload.concat(employees10);
    */

    sortedByWorkload = [...employees10, ...employees20, ...employees30, ...employees40];
    //sortedEmployees = Object.assign({}.sortedByWorkload);
    sortedByworkload = JSON.stringify(sortedByWorkload,null,2);
    //const sortedbyWorkload = Object.assign({}, sortedByWorkload);

     //Spread Syntax (spread turns array into a list of arguments)
     //https://javascript.info/rest-parameters-spread

    averageAge = sumOfAges/peopleCount;
    averageWomenWorkload = WomenWorkLoad/WomenWorkCount;
    averageAge = parseInt(averageAge.toFixed(1));
    averageWomenWorkload = parseInt(averageWomenWorkload.toFixed(1));

    
    

    //workload median
    workloadList.sort();
    medianWorkload = medianCalculation(peopleCount, workloadList);
    
    //age median calculation
    agesList.sort();
    medianAge = medianCalculation(peopleCount, agesList);


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
         
    };

    dtoOut.push(infoEmployees);
    dtoOut.push(sortedByWorkload);
                                              
         
    
    return dtoOut; //return info and sorted array
    
}

const result = main(dtoIn); //result variable = main function output



console.log(result);

//console.log(result); 