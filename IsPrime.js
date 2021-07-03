/*Define a function that takes an integer argument and returns logical value true or false depending on 
if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive
 divisors other than 1 and itself. */

//  function isPrime(num) {
//     if (num===1 || num<= 0){
//       return false;
//     }
//     else 
//       for (let i=2; i<num; i++){
//         if (num%i===0){
//           return false;
//         }
//     }    
//     return true;

//  }

//console.log(isPrime(91));

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

console.log(isPrime(13));