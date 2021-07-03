// _ _ _/''''\_ _ _ _ _ _/'\_

let landscape = function () {
    let result = "";

    let flat = function (size) {
        for (let index = 0; index < size; index++) {
            result += "_";   
        }
    }

    let mountain = function (size) {
        result += "/";
        for (let index = 0; index < size; index++) {
            result += "'";            
        }
        result += "\\" ;
    }

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);

    return result;
}

console.log(landscape());