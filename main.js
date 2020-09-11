

let decimalNumber = prompt("What is the decimal number?");
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

firstRemainder1 = Math.floor(decimalNumber / 2);

firstRemainder2 = (Math.ceil(decimalNumber / 2) - (firstRemainder1));

secondRemainder1 = Math.floor(firstRemainder1 / 2);

secondRemainder2 = (Math.ceil(firstRemainder1 / 2) - (secondRemainder1));

thirdRemainder1 = Math.floor(secondRemainder1 / 2);

thirdRemainder2 = (Math.ceil(secondRemainder1 / 2) - (thirdRemainder1));

fourthRemainder1 = Math.floor(thirdRemainder1 / 2);

fourthRemainder2 = (Math.ceil(thirdRemainder1 / 2) - (fourthRemainder1));





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let hexadecimalRemainder1 = decimalNumber / 16

let hexadecimalRemainder2 = hexadecimalRemainder1 * 16

hexadecimalNumber = hexadecimalRemainder1 + hexadecimalRemainder2


if(hexadecimalRemainder1 == 10){
    hexadecimalRemainder1 == "A";
}else if(hexadecimalRemainder1 == 11){
    hexadecimalRemainder1 == "B";
}else if(hexadecimalRemainder1 == 12){
    hexadecimalRemainder1 == "C";
}else if(hexadecimalRemainder1 == 13){
    hexadecimalRemainder1 == "D";
}else if(hexadecimalRemainder1 == 14){
    hexadecimalRemainder1 == "E";
}else if(hexadecimalRemainder1 == 15){
    hexadecimalRemainder1 == "F";
}else(hexadecimalRemainder1 > 10 ){
    hexadecimalRemainder1 == hexadecimalRemainder1;
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log(`The binary of ${decimalNumber} is ${binaryNumber}`);

console.log(`The hexadecimal of ${decimalNumber} is ${hexadecimalNumber}`);

