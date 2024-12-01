
declare module 'Circle';

interface Point {
    x: number;
    y: number;
}

interface Circle {
    x: number;
    y: number;
    r: number;
}

export class Circle {

    /**
     * Determines if two circles intersect
     *
     * @param a Circle
     * @param b Circle
     * @returns boolean
     */
    static intersect(a: Circle, b: Circle): boolean;

    /**
     * Determines if a point is within a circle
     *
     * @param c Circle
     * @param p Point
     * @returns boolean
     */
    static intersectPoint(c: Circle, p: Point): boolean;

    /**
     * Calculates the intersection points of two circles
     *
     * @param A Circle
     * @param B Circle
     * @returns Point[] | null
     */
    static intersection(A: Circle, B: Circle): Point[] | null;

    /**
     * Calculates the intersection area of two circles
     *
     * @param A Circle
     * @param B Circle
     * @returns number
     */
    static intersectionArea(A: Circle, B: Circle): number;

    /**
     * Calculates the area of a circle
     *
     * @param c Circle
     * @returns number
     */
    static area(c: Circle): number;

    /**
     * Calculates the height of a circle
     *
     * @param a Circle
     * @returns number
     */
    static height(a: Circle): number;

    /**
     * Calculates the width of a circle
     *
     * @param a Circle
     * @returns number
     */
    static width(a: Circle): number;

    /**
     * Calculates the perimeter of a circle
     *
     * @param a Circle
     * @returns number
     */
    static perimeter(a: Circle): number;

    /**
     * Calculates the center point of a circle
     *
     * @param a Circle
     * @returns Point
     */
    static center(a: Circle): Point;

    /**
     * Resizes the circle by a given value on the center
     *
     * @param c Circle
     * @param w number
     * @returns Circle
     */
    static insetBy(c: Circle, w: number): Circle;

    /**
     * Calculates a circle given three points
     *
     * @param p1 Point
     * @param p2 Point
     * @param p3 Point
     * @returns Circle
     */
    static fromThreePoints(p1: Point, p2: Point, p3: Point): Circle;
}

export default Circle;