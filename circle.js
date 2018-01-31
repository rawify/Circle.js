/**
 * @license Circle.js v0.0.1 08/04/2016
 *
 * Copyright (c) 2016, Robert Eisele (robert@xarg.org)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 **/

(function (root) {

  'use strict';

  Math['hypot'] = Math['hypot'] || function (a, b) {

    return Math.sqrt(a * a + b * b);
  };

  var Circle = {
    /**
     * Determines if two circles intersect
     *
     * @param {Object} a
     * @param {Object} b
     * @returns {boolean}
     */
    'intersect': function (a, b) {

      var xd = a['x'] - b['x'];
      var yd = a['y'] - b['y'];
      var rs = a['r'] + b['r'];

      return (xd * xd + yd * yd) <= (rs * rs);
    },
    /**
     * Determines if a point is within a circle
     *
     * @param {Object} c
     * @param {Object} p
     * @returns {boolean}
     */
    'intersectPoint': function (c, p) {

      if (c['r'] === 0)
        return false;

      var xd = c['x'] - p['x'];
      var yd = c['y'] - p['y'];
      
      return (xd * xd + yd * yd) <= (c['r'] * c['r']);
    },
    /**
     * Calculates the intersection points of two circles
     *
     * @see http://www.xarg.org/2016/07/calculate-the-intersection-points-of-two-circles/
     * @param {Object} A
     * @param {Object} B
     * @returns {Object}
     */
    'intersection': function (A, B) {

      var d = Math.hypot(B['x'] - A['x'], B['y'] - A['y']);

      if (d <= A['r'] + B['r'] && d >= Math.abs(B['r'] - A['r'])) {

        var x = (A['r'] * A['r'] - B['r'] * B['r'] + d * d) / (2 * d);
        var y = Math.sqrt(A['r'] * A['r'] - x * x);

        var eX = (B['x'] - A['x']) / d;
        var eY = (B['y'] - A['y']) / d;

        var P1 = {
          'x': A['x'] + x * eX - y * eY,
          'y': A['y'] + x * eY + y * eX
        };

        var P2 = {
          'x': A['x'] + x * eX + y * eY,
          'y': A['y'] + x * eY - y * eX
        };

        return [P1, P2];

      } else {

        // No Intersection, far outside or one circle is inside the other
        return null;
      }
    },
    /**
     * Calculates the intersection area of two circles
     *
     * @see http://www.xarg.org/2016/07/calculate-the-intersection-area-of-two-circles/
     * @param {Object} A
     * @param {Object} B
     * @returns {number}
     */
    'intersectionArea': function (A, B) {

      var d = Math.hypot(B['x'] - A['x'], B['y'] - A['y']);

      if (d <= A['r'] + B['r']) {

        var a = A['r'] * A['r'];
        var b = B['r'] * B['r'];

        var x = (a - b + d * d) / (2 * d);
        var z = x * x;
        var y = Math.sqrt(a - z);

        if (d < Math.abs(B['r'] - A['r'])) {
          return Math.PI * Math.min(a, b);
        }
        return a * Math.asin(y / A['r']) + b * Math.asin(y / B['r']) - y * (x + Math.sqrt(z + b - a));
      }
      return 0;
    },
    /**
     * Calculates the area of a circle
     *
     * @param {Object} c
     * @returns {number}
     */
    'area': function (c) {

      return Math.PI * c['r'] * c['r'];
    },
    /**
     * Calculates the height of a circle
     *
     * @param {Object} a
     * @returns {number}
     */
    'height': function (a) {

      return 2 * a['r'];
    },
    /**
     * Calculates the width of a circle
     *
     * @param {Object} a
     * @returns {number}
     */
    'width': function (a) {

      return 2 * a['r'];
    },
    /**
     * Calculates the perimeter of a circle
     *
     * @param {Object} a
     * @returns {number}
     */
    'perimeter': function (a) {

      return 2 * Math.PI * a['r'];
    },
    /**
     * Calculates the center point of a circle
     *
     * @param {Object} a
     * @returns {Object}
     */
    'center': function (a) {

      return {
        'x': a['x'],
        'y': a['y']
      };
    },
    /**
     * Resizes the circle by a given value on the center
     *
     * @param {Object} c
     * @param {number} w
     * @returns {Object}
     */
    'insetBy': function (c, w) {

      return {
        'x': c['x'],
        'y': c['y'],
        'r': Math.max(0, c['r'] - w)
      };
    }
  };

  if (typeof define === 'function' && define['amd']) {
    define([], function () {
      return Circle;
    });
  } else if (typeof exports === 'object') {
    module['exports'] = Circle;
  } else {
    root['Circle'] = Circle;
  }

})(this);
