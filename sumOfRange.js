/*Write a range function that takes two arguments, start and end, and
returns an array containing all the numbers from start up to (and including) end.
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.(COMPLETED).

As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2]*/


function range(start, end) {
    testArray = [];
    for (let i = start; i <= end; i++) {  
        testArray.push(i);
    }
    return (testArray);
}
    

function sum(index) {
    let total = 0;
    for (let i = 0; i < index.length; i++) {
            total+=index[i];
    }
    return total;
}

console.log(sum(range(5,10)));

//the array reduce method has a simpler approach

console.log(range(5,10).reduce(function (a,b) {
    return a + b 
}))

//ES6 
console.log(range(5,10).reduce((a,b)=>a,b));


