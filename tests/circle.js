
var should = require('should');
var circle = require('../circle.js');

var tests = [
  {m: 'intersect', p: [{x: 20, y: 20, r: 10}, {x: 30, y: 20, r: 15}], r: true},
  {m: 'intersect', p: [{x: -20, y: 20, r: 10}, {x: 30, y: 20, r: 15}], r: false},
  {m: 'perimeter', p: [{x: 20, y: 20, r: 10}], r: 20 * Math.PI}
];

describe('Circles', function() {

  for (var i = 0; i < tests.length; i++) {

    (function(i) {

      it('Should work with ' + (tests[i].label || "->" + tests[i].m + "(" + tests[i].p.join(", ") + ")"), function() {

        var c = tests[i];
        if (typeof c.r !== 'number')
          circle[c.m].apply(circle, c.p).should.be.equal(c.r);
        else
          circle[c.m].apply(circle, c.p).should.be.approximately(c.r, 1e-15);
      });

    })(i);
  }
});
