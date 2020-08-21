// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

//The scope of "internal" extends to its child (nestedFunction).  Meaning nestedfunction can use varibles like External and Internal but if you were to create a variable inside nestedFunction myFunction would not be able to use it

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(element){
  let counter=0;
  for(let x=0;x<=element;x++)
  {
    counter+=x;
  }
  return counter;
}

