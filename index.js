'use strict';

module.exports = gcd;

// largest number that divides both with no remainder

function gcd(a, b) {
  if (a > b) {
    let olda = a;
    a = b
    b = olda;
  }

  var diff = b - a;
  var ndiff = 0;
  var div = 0;

  // wouldn't be larger than the difference of the numbers
  while(ndiff <= diff) {
    if (!(a % diff) && !(b % diff)) div = diff;
    ndiff++;
  };

  return div;
};
