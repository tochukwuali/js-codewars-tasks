let biconv = (4).toString(2)

const deci2binaryConverter = (n) => {
    let binary = n.toString(2)
    let result =  ([...binary].filter(item => item !== '0'));
    return result.length
}

console.log(deci2binaryConverter(1234));
