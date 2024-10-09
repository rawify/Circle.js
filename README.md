# Circle.js

[![NPM Package](https://img.shields.io/npm/v/circle.js.svg?style=flat)](https://npmjs.org/package/circle.js "View this project on npm")
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)


Circle.js is a collection of functions to work with circles. The aim is to have a fast and correct library, which makes it easy to calculate the intersection of circles, the area of a circle and so on.

Every circle is defined by a cartesian point `(x, y)` and the radius `r`.

Circles.js is analogous to [Rectangles.js](https://github.com/infusion/Rectangles.js) and [Angles.js](https://github.com/infusion/Angles.js).

## Examples


```javascript
const circle = require('circle.js');

const A = {x: 20, y: 20, r: 10};
const B = {x: 80, y: 80, r: 30};

if (circle.intersect(A, B)) {
  console.log(circle.intersection(A, B)); // Intersection points
  console.log(circle.intersectionArea(A, B)); // Intersection area
} else {
  console.log("no intersection");
}
```

## Functions


intersect(a, b)
---
Determines if two circles intersect

intersection(a, b)
---
Calculates the intersection points of two circles

intersectionArea(a, b)
---
Calculates the intersection area of two circles

area(a)
---
Calculates the area of a circle

height(a)
---
Calculates the height of a circle. Obviously, this is the same as the width.

width(a)
---
Calculates the width of a circle. Obviously, this is the same as the height.

perimater(a)
---
Calculates the perimeter of a circle

center(a)
---
Calculates the center point of a circle. Simply it's coordinates.

insetBy(a)
---
Resizes the circle by a given value on the center

fromThreePoints(p1, p2, p3)
---
Caclulates a circle {x, y, r} with given three {x, y} points

## Installation

Installing Circle.js is as easy as cloning this repo or use one of the following command:

```
npm install circle.js
```


## Using Circle.js with the browser

```html
<script src="circle.min.js"></script>
<script>
console.log(Circle.center(A));
</script>
```



## Coding Style

As every library I publish, Circle.js is also built to be as small as possible after compressing it with Google Closure Compiler in advanced mode. Thus the coding style orientates a little on maxing-out the compression rate. Please make sure you keep this style if you plan to extend the library.

## Building the library

After cloning the Git repository run:

```
npm install
npm run build
```

## Run a test

Testing the source against the shipped test suite is as easy as

```
npm run test
```

## Copyright and Licensing

Copyright (c) 2024, [Robert Eisele](https://raw.org/)
Licensed under the MIT license.
