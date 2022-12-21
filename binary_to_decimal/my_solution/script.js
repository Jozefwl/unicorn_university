const isInputBinary = (input) => {
    for (let num of input) {
        if (!(num === "0" || num === "1")) return false;
    }
    return true;
}

const binaryToDecimal = (bin) => {
    const isNumberValid = isInputBinary(bin);
    if (!isNumberValid) return alert("Wrong input");

    const reversedNum = bin.split('').reverse();

    const conversedArray = reversedNum.map((num, i) => num * (2**+i));
    const decimal = conversedArray.reduce((acc, val) => acc + val, 0);

    return decimal
}

const result = binaryToDecimal(prompt("Enter a number"));

const text = document.getElementById("result");
text.innerHTML = result;