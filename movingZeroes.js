arr = [false, [], 0, 0, 0, 1, 1, 2, 5, 9, 0, 3, 0, 1]

function mZ(array) {
    zerArr = array.filter(item => item === 0);
    newArr = array.filter(item => item !== 0)
    return newArr.concat(zerArr);
}
console.log(mZ(arr))