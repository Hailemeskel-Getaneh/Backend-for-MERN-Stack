let x = 16;

let validate = (num) => {
    return Number.isInteger(num) && !isNaN(num)
} 
let response = validate(x);
console.log(response)