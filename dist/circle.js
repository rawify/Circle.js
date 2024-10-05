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
   * @see https://raw.org/math/calculate-the-intersection-points-of-two-circles/
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
   * @see https://raw.org/math/calculate-the-intersection-area-of-two-circles/
   * @param {Object} A
   * @param {Object} B
   * @returns {number}
   */
  'intersectionArea': function (A, B) {

    var dd = Math.pow(B['x'] - A['x'], 2) + Math.pow(B['y'] - A['y'], 2);
    var d = Math.sqrt(dd);

    if (d <= A['r'] + B['r']) {

      var Arr = A['r'] * A['r'];
      var Brr = B['r'] * B['r'];

      if (d <= Math.abs(B['r'] - A['r'])) {
        return Math.PI * Math.min(Arr, Brr);
      }

      var t1 = 2 * Math.acos((Arr + dd - Brr) / (2 * d * A['r']));
      var t2 = 2 * Math.acos((Brr + dd - Arr) / (2 * d * B['r']));

      return 0.5 * (Arr * (t1 - Math.sin(t1)) + Brr * (t2 - Math.sin(t2)));
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
  },
  /**
   * Caclulates a circle given three points
   * 
   * @see https://raw.org/math/create-a-circle-out-of-three-points/
   * @param {number} p1
   * @param {number} p2
   * @param {number} p3
   * @returns {Object}
   */
  'fromThreePoints': function (p1, p2, p3) {

    var x1 = p1['x'];
    var y1 = p1['y'];
    var x2 = p2['x'];
    var y2 = p2['y'];
    var x3 = p3['x'];
    var y3 = p3['y'];

    var a = x1 * (y2 - y3) - y1 * (x2 - x3) + x2 * y3 - x3 * y2;

    var b = (x1 * x1 + y1 * y1) * (y3 - y2)
      + (x2 * x2 + y2 * y2) * (y1 - y3)
      + (x3 * x3 + y3 * y3) * (y2 - y1);

    var c = (x1 * x1 + y1 * y1) * (x2 - x3)
      + (x2 * x2 + y2 * y2) * (x3 - x1)
      + (x3 * x3 + y3 * y3) * (x1 - x2);

    var x = -b / (2 * a);
    var y = -c / (2 * a);

    return {
      x: x,
      y: y,
      r: Math.hypot(x - x1, y - y1)
    };
  }
};

Object.defineProperty(Circle, "__esModule", { 'value': true });
Circle['default'] = Circle;
Circle['Circle'] = Circle;
module['exports'] = Circle;
