oldtest = ['raw', 'wwe', 3, 4, 5, true]

const arrayClone = test => {
    const newtest = test.concat()
    return newtest
}

console.log(arrayClone(oldtest));
console.log(oldtest)
