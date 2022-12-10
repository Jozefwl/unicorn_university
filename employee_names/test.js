//Example - testing


let employee = {};
const outputArray = [];

ager = 20;

for(i=1; i<4; i++){
employee.name = "Peter";
employee.age = ager;
ager=ager+5;
outputArray.push(employee);
};


function countName(employeeName, array){
    let nameCount = 0;
    for(let i; i < array.length; i++){
        if(employee.name == employeeName){
            nameCount++;
        }
    }
    return nameCount;
}

let names = {
   all: countName("Peter",employee),
   maleNames: countName("John",employee),
};

console.log(countName("Peter",outputArray));