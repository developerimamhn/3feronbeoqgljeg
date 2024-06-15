
var a = 5;
var b = 15; 

if (a > b) {
    console.log('a is greater than b'); 
} 
else { 
    console.log('a is not greater than b'); 
} 

function multiply(x, y) {
    return x * y; 
} 
console.log(multiply(3, 7)); //multiply 3 and 7


var c = 8; var d = 8; 

if (c === d) {
    console.log('c is equal to d'); 
} 
else { 
    console.log('c is not equal to d'); 
} 

function subtract(m, n) {
    return m - n; 
} 
console.log(subtract(10, 4)); //subtract 10 and 4

var e = 12;
var f = 6;

if (e % f === 0) {
    console.log('e is divisible by f'); 
} 
else {
    console.log('e is not divisible by f'); 
} 

function divide(p, q) {
    return p / q; 
} 
    console.log(divide(20, 5)); //divide 20 by 5


    // guess the output for every operations below without any tools


// Arithmetic Operations
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

// Comparison Operations
console.log(a > b); // True
console.log(a < b); // False
console.log(a == 10); // True
console.log(b != 5); // False

// Logical Operations
let isAdult = true;
let hasPermission = false;
console.log(isAdult && hasPermission); // False
console.log(isAdult || hasPermission); // True
console.log(!isAdult); // False


// function area

// addition
const add = (a , b) =>{
    const addition = (a,b) =>{
        return a + b ;
    }
    return addition(a, b);
}

console.log(add(a , b))

// subtraction
const subtract = (a , b) =>{
    const subtraction = (a,b) =>{
        return a - b ;
    }
    return subtraction(a , b)
}

console.log(subtract(10, 4));

// multiplication
const multiply = (a , b)=>{
    const multiplication = () =>{
        return a * b;
    }
    return multiplication(a , b);
}

console.log(multiply(3 , 7)) ;


// divideing
const divide = (a , b) =>{
    const divideing = () =>{
        return a / b;
    }
    return divideing(a , b);
}

console.log(divide(20 , 5));


const a = 5;

const printNumbers = ()=>{
    for (let i=0; i > a; i++){
        console.log(i)
    }
}

printNumbers()


const printEvenNumbers = () =>{
    let i = 2;
    while(i < 22){
        console.log(i);
        i+=2;
    }
}

printEvenNumbers()

const printOddNumbers =()=>{
    let i = 1;
    do{
        console.log(i);
        i+=3;
    }
    while(i<20)
}

printOddNumbers()





const getDayName = (dayNumber)=>{
    let dayname;
    switch (dayNumber){
        case 1:
            dayname = 'Sunday';
            break;
        case 2:
            dayname = 'Monday';
            break;
        case 3:
            dayname = 'Tuesday';
            break;
        case 4:
            dayname = 'Wednesday';
            break;
        case 5:
            dayname = 'Thursday';
            break;
        case 6:
            dayname = 'Friday';
            break;
        case 7:
            dayname = 'Saturday';
            break;
        default:
            dayname = 'Invalid day number'
    }
    return dayname
}

console.log(getDayName(3));
console.log(getDayName(7));
console.log(getDayName(0));




const testFunctionScope = () =>{
    var insideFunction = "I am inside the function";
    console.log(insideFunction); // This will print the variable
}


// Call the function to see the output
testFunctionScope();




const testBlockScope =()=>{
    if(true){
        const blockScopedVariable = "I am inside the block";
        console.log(blockScopedVariable)
    }
}

testBlockScope();


const textBlockScopeLoop = ()=>{
    for(let i = 0; i<2; i+=2){
        const blockScopedVariable = "I am inside the block";
        console.log(blockScopedVariable)
    }
}

textBlockScopeLoop()


(()=>{
    console.log("This is an IIFE")
})();

((a,b)=>{
    console.log(a+b);
})(7,8);



(()=>{
    let privateVariable = "I'm private!";
    console.log(privateVariable);

    const privateFunction = ()=>{
        console.log("This function is also private!")
    }
    privateFunction();
})();

