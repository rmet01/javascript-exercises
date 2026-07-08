const palindromes = function (word) {
    let noSpaces = word.replaceAll(/[ ,.!]/g, "");
    let revWord = noSpaces.split("").reverse().join("");
    if (noSpaces.toLowerCase() === revWord.toLowerCase())
        return true
    else return false
};

// Do not edit below this line
module.exports = palindromes;
