// ----------------------------------
// Function binaryToDecimal

function binaryToDecimal(binary_number){
    const length = binary_number.toString().length; 
    const string = binary_number.toString();
    let binaryVal = true; //default value

    for(let i = 0; i < length; i++){  //binary check - compare string
        if(string[i] == "0" || string[i] == "1"){}
        
        else {
            binaryVal = false;            
        }
    }

    if(binaryVal == false){
        alert("Wrong input number, the program needs to be restarted.");
    }

// ----------------------------------
// Conversion to decimal number

    if(binaryVal){
    let power = length - 1;
    let finalOut = 0;
    let tempNum = 0;


    for(i = 0; i < length; i++){

        tempNum = parseInt(string[i]); //convert string character to integer
        finalOut = finalOut + tempNum*Math.pow(2, power);  // calculate number and add to total      
        
        power--; //decrement power
        
    }

    return finalOut;
                }
    
    
}


// ----------------------------------
// Sequence - Output number

let binary_number = prompt("Enter a binary number:");
let decimal_number = binaryToDecimal(binary_number);

window.alert(decimal_number);
document.write("<h1>Result: "+decimal_number+"</h1>");