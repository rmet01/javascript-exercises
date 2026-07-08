const add = function(a, b) {
	 return a + b
};

const subtract = function(a, b) {
    return a - b
};

const sum = function(arr) {
  return arr.reduce((total, current) => {
  return total + current
  },0)
	
};

const multiply = function(arr) {
  return arr.reduce((total, current) => {
  return total * current
  },1)

};

const power = function(base, exponent) {
    return Math.pow(base, exponent)
};

const factorial = function(number) {
  let fact = 1;
	for (let count = 1; count <= number; count++){
      fact *= count
  };
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
