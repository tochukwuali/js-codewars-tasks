let first = ["a", "b", "z", "d", "e", "d"]
let second = ["a", "b", "j", "j"]

const diff = (first, second) => {
    let difference1 = first.filter(x => !second.includes(x));
    let difference2 = second.filter(y => !first.includes(y))
    let total = difference1.concat(difference2)
    return [...new Set([...total])].sort((first, second) => first.localeCompare(second) )
}

console.log(diff(first, second))

 
