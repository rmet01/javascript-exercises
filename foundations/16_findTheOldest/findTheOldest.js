const findTheOldest = function(arr) {
    let oldest = arr.sort((a , b) => (b.yearOfDeath - b.yearOfBirth || 2026 - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth || 2026 - b.yearOfBirth))
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
