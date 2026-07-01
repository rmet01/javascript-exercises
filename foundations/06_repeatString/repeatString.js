const repeatString = function(word, count) {
    let combinedString = "";
    if (count < 0){
        return("ERROR");
    }
    for (count; count > 0; count--){
        combinedString = combinedString + word;
        }
    return combinedString

};

// Do not edit below this line
module.exports = repeatString;
