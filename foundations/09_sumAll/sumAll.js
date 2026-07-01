const sumAll = function(num1, num2) {
    let sumArray = []
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR"
    }
    else if (num1 > num2){
        for (let i = num2; i<=num1 ; i++){
            sumArray.push(i)       
        }
    }
    else if (num1 < num2){
        for (let i = num1; i<=num2 ; i++){
            sumArray.push(i)
        }           
    }
    return sumArray.reduce((a, b) => a + b)
}


// Do not edit below this line
module.exports = sumAll;
