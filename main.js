/*This program will ask for a decimal number, then it will convert that given decimal number into a binary and hexadecimal number.*/
let decimalNumber = Number(prompt("What is the decimal number?"));
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/* This is the part of the code that will solve to convert the given decimal number into a binary number*/
//this part will divide the decimal number by 2, to get the remainder for the answer later on. Will also keep on divide the given decimal by two to get the answer to "...Remainder2" and then display the answer in the console.
firstRemainder1 = Math.floor(decimalNumber / 2);

firstRemainder2 = (Math.ceil(decimalNumber / 2) - (firstRemainder1));
//
secondRemainder1 = Math.floor(firstRemainder1 / 2); 

secondRemainder2 = (Math.ceil(firstRemainder1 / 2) - (secondRemainder1));
//
thirdRemainder1 = Math.floor(secondRemainder1 / 2);

thirdRemainder2 = (Math.ceil(secondRemainder1 / 2) - (thirdRemainder1));
//
fourthRemainder1 = Math.floor(thirdRemainder1 / 2);

fourthRemainder2 = (Math.ceil(thirdRemainder1 / 2) - (fourthRemainder1));
//
fifthRemainder1 = Math.floor(fourthRemainder1 / 2);

fifthRemainder2 = (Math.ceil(fourthRemainder1 / 2) - (fifthRemainder1));
//
sixthRemainder1 = Math.floor(fifthRemainder1 / 2);

sixthRemainder2 = (Math.ceil(fifthRemainder1 / 2) - (sixthRemainder1));
//
seventhRemainder1 = Math.floor(sixthRemainder1 / 2);

seventhRemainder2 = (Math.ceil(sixthRemainder1 / 2) - (seventhRemainder1));
// 
eighthRemainder1 = Math.floor(seventhRemainder1 / 2);

eighthRemainder2 = (Math.ceil(seventhRemainder1 / 2) - (eighthRemainder1));
//
ninthRemainder1 = Math.floor(eighthRemainder1 / 2);

ninthRemainder2 = (Math.ceil(eighthRemainder1 / 2) - (ninthRemainder1));

//This if statement will see if the "eighthRemainder1" can divided down anymore and if so it will keep on dividing "eighthRemainder1". Then it will spit out the answer into the console.
//Will show the answer in console.
if (eighthRemainder1 > 0){
    let leftOvers = eighthRemainder1.toString(2);
    
    if (leftOvers < 10){
        leftOvers = "000" + leftOvers;
        
    }else if(leftOvers < 100){
        leftOvers = "00" + leftOvers;
    
    }else if(leftOvers < 1000){
        leftOvers = "0" + leftOvers;
    }else if(leftOvers == 10){
        leftOvers = "00" + leftOvers;
    }else if(leftOvers == 100){
        leftOvers = "0" + leftOvers;
    }
    

    console.log(`The binary of ${decimalNumber} is ${leftOvers} ${eighthRemainder2}${seventhRemainder2}${sixthRemainder2}${fifthRemainder2} ${fourthRemainder2}${thirdRemainder2}${secondRemainder2}${firstRemainder2}`);

}
//This if statement will spit out the binary of the given decimal only if "eighthRemainder1" can't be divided down anymore.
//Will show the answer in console.
if (eighthRemainder1 == 0){

    console.log(`The binary of ${decimalNumber} is ${eighthRemainder2}${seventhRemainder2}${sixthRemainder2}${fifthRemainder2} ${fourthRemainder2}${thirdRemainder2}${secondRemainder2}${firstRemainder2}`);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
* This line of code will take the given decimal number and then it will keep on dividing the given decimal number by 16 to it to a hexadecimal number.
* Will show the answer in the console.
*/

console.log(`The hexadecimal of ${decimalNumber} is ${decimalNumber.toString(16)}`);
