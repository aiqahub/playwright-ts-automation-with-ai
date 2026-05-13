let x = "global";

function hoisting() {
    console.log(x)
    let x = "local";
    console.log(x)
}


hoisting()

/* Output - 
global
ReferenceError: Cannot access 'x' before initialization 
Even though you have a let x = "global" outside, when you declare let x = "local" inside the function:

JavaScript hoists the local x to the top of the hoisting() function scope.
However, let variables are in the Temporal Dead Zone (TDZ) from the start of the function until the line where they are declared (line 5).
When console.log(x) runs on line 4, it tries to access the local x while it's still in the TDZ, causing the error.

*/