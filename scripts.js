

//exercise 1: is current value an odd number?
function printOdds(count=0) {
    for(let i = 1; i <= count; i++) {
        if (i % 2 == 1) {
            console.log(i);            
        }
       else{
       // console.log(`${i} is an even number`)
        continue;
       }
    }
}
  console.log(printOdds(43)); //Change the value to test


//exercise 2: Test Age

function checkAge(userName="Joe", age=16){
   
    // local variables
    aboveSixteen = `Congrats ${userName}, you can drive!`;
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16){
     console.log(aboveSixteen);
    }
    else{
    console.log(belowSixteen);
    }
}
checkAge("Janet", 14); //Change the value to test
/*
do{
    var userNumber = prompt("Please enter a number", 100);
   }  while(userNumber <=0 );
*/