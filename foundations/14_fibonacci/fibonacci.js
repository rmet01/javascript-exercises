const fibonacci = function(a) {
    const arr = [0,1];  

    if (Number(a)>=2) {
        for (let count = 2; count <= Number(a); count++){
            arr.push(arr[(count-1)]+arr[count-2])
        };
    }
    else if (Number(a)<0) return "OOPS"
    return arr[Number(a)]          

};

// Do not edit below this line
module.exports = fibonacci;
