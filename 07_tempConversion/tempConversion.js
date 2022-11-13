const ftoc = function(F) {
  // To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9)
  let newC = (F - 32.0) * (5/9);
  let roundedC = Math.round(newC * 10) / 10;
  return roundedC;
};

const ctof = function(C) {
  let newF = (C * (9/5)) + 32.0;
  let roundedF = Math.round(newF * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

