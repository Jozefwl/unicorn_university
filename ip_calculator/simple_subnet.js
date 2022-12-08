// Made by Jozef Waldhauser
// on a rainy day ---------

function zeroToEight(number){ //This function returns a decimal based on the bits in an eight bit number (back-to-front)
    if(number == 0){return 0;};
    if(number == 1){return 128;};
    if(number == 2){return 192;};
    if(number == 3){return 224;};
    if(number == 4){return 240;};
    if(number == 5){return 248;};
    if(number == 6){return 252;};
    if(number == 7){return 254;};
    if(number == 8){return 255;};
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
