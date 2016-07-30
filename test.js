'use strict';

var assert = require('assert');
var gcd = require('.');

describe('gcd()', function(){

  it('finds the greatest common divisor', function(){

    assert(gcd(100, 50) == 50);
    assert(gcd(10, 5) == 5);
    assert(gcd(5, 10) == 5);
    assert(gcd(36, 24) == 12);
    assert(gcd(36, 30) == 6);
  
  });
});
