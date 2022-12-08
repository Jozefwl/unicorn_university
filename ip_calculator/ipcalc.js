// Made by Jozef Waldhauser
// on a rainy day ---------

function oneToEight(number){ //This function returns a binary number 
    
    for(let i=0; i<=number; i++){
        if(i == number){
            let decimal = Math.pow(2,i);
        }
    }
}

function subnetMask(number){
    if(number<=8){   
    return zeroToEight(number)+".0.0.0";
    }

    if(number<=16){   
    number = number-8     
    return "255."+zeroToEight(number)+".0.0";
    }

    if(number<=24){
    number = number-16;
    return "255.255."+zeroToEight(number)+".0";
    }

    if(number<=32){
    number = number - 24;
    return "255.255.255."+zeroToEight(number);
    }
}

console.log(subnetMask(16));
