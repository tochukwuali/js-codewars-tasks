// a function that finds the smallest integer in an array

function myFunction(justPrices) {

    var smallestNumber = justPrices[0];
    for(i = 0; i < justPrices.length; i++) {
        if(justPrices[i] > smallestNumber) {
            smallestNumber = justPrices[i];
        }
    }
    return smallestNumber;
}

// // refactoring ES5
// function findSmallestInt(args) {
//     return Math.min.apply(null, args)
//   }
  
//   //refactoring ES6
// function findSmallestInt(args) {
//     return Math.min(...args)
//   }


var test = [5, 6, 7.3, 3.4,67.3, 9]
console.log(myFunction(test));