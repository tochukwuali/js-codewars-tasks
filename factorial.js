//as the name implies, find the factorial of any given number

function factorial (n) {
    if (n == 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
    
}

console.log(factorial(3));