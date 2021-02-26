// Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’

function concatName (firstName, lastName) {
    return `${firstName} ${lastName}`;
}
console.log(concatName('Bobby', 'Getz'));

// Write the same function as above as an arrow function with a different name.

let concatNameArrow = (firstName, lastName) => firstName + ' ' + lastName;

console.log(concatNameArrow('Gobby', 'Jetz'));

// Look up the JavaScript functions setTimeout() and setInterval(). Notice how they each take a callback.
// Using setTimeout, write an anonymous (has no name assigned to it) arrow function in the callback parameter position. The function should alert ‘Time is up!’. Choose whatever length of time you want for the timeout.

function myTimeout() {
setTimeout(() => alert("Time is up!"), 1000);
}
myTimeout();

// Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. Using setInterval, pass askAreWeThereYet into the callback parameter position. Choose whatever length of time you want for the interval.

let askAreWeThereYet = () => alert("Are we there yet?");
setInterval(askAreWeThereYet(), 3000);

// In this step you are going to write a function that takes a callback to better understand how callbacks work.
// Write a new function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback function that will process the sliced element. 
// Inside the function, use the first two parameters to splice an element from the array.
// Inside the function, call the callback function and pass the spliced value into it.
// Outside of the function, create an array of strings, call processSplicedValue, and pass in the array you just created, an index number, and console.log into it. 
function logFunction (splicedValue) {
    console.log(splicedValue)
}
function processSplicedValue (myArray, i, logFunction) {
    const splicedValue = myArray.splice(i, 1); 
    logFunction(splicedValue);
}

let myArray = ['Johnny', 'Sara', 'Kimber', 'Celestiano', ' Jeremy', 'Buckingham Palace', 'Bobby!', 'Tonya Harding', 'Buscemi'];

processSplicedValue(myArray, 1, logFunction);


// For example: processSplicedValue(arrayName, 2, console.log);
// Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
processSplicedValue(myArray, 2, alert);
// Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.
processSplicedValue(myArray, 2, () => alert(myArray[2]));
// Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.

function funFunction(splicedValue) {
    console.log(splicedValue + ' - this was taken out of your array!');
}

processSplicedValue(myArray, 2, funFunction);

