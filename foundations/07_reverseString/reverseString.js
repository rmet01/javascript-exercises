const reverseString = function(string) {
    let arr = string.split(``);
    let revArr = [];
    for (let i = string.length;i!=0;i--){
        revArr.push(arr.pop())
    }
    return (revArr.join(""))
};



// Do not edit below this line
module.exports = reverseString;
