

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

//This if statement will see if the "eighthRemainder1" can divided down anymore and if so it will keep on dividing "eighthRemainder1". Then it will slip out the answer into the console.
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
//This if statement will slip out the binary of the given decimal only if "eighthRemainder1" can't be divided down anymore.
if (eighthRemainder1 == 0){

    console.log(`The binary of ${decimalNumber} is ${eighthRemainder2}${seventhRemainder2}${sixthRemainder2}${fifthRemainder2} ${fourthRemainder2}${thirdRemainder2}${secondRemainder2}${firstRemainder2}`);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
* This line of code will take the given decimal number and then it will keep on dividing the given decimal number by 16 to it to a hexadecimal number.
* Will show the answer in the console.
*/

console.log(`The hexadecimal of ${decimalNumber} is ${decimalNumber.toString(16)}`);
