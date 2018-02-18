
var should = require('should');
var circle = require('../circle.js');

var tests = [
  {m: 'intersect', p: [{x: 20, y: 20, r: 10}, {x: 30, y: 20, r: 15}], r: true},
  {m: 'intersect', p: [{x: -20, y: 20, r: 10}, {x: 30, y: 20, r: 15}], r: false},
  {m: 'intersect', p: [{x: 0, y: 0, r: 1}, {x: 2, y: 0, r: 4}], r: true},
  {m: 'perimeter', p: [{x: 20, y: 20, r: 10}], r: 20 * Math.PI},
  {m: 'fromThreePoints', p: [{x: 16, y: 28}, {x: -37, y: 28}, {x: -1, y: 43}], r: {
      "x": -10.5,
      "y": 15.1,
      "r": 29.473038526762046
    }}
];

describe('Circles', function() {

  for (var i = 0; i < tests.length; i++) {

    (function(i) {

      it('Should work with ' + (tests[i].label || "->" + tests[i].m + "(" + tests[i].p.join(", ") + ")"), function() {
        var c = tests[i];
        circle[c.m].apply(circle, c.p).should.be.deepEqual(c.r);
      });

    })(i);
  }
});
