declare module "svg-path-commander/src/parser/paramsCount" {
    export default paramsCount;
    namespace paramsCount {
        const a: number;
        const c: number;
        const h: number;
        const l: number;
        const m: number;
        const r: number;
        const q: number;
        const s: number;
        const t: number;
        const v: number;
        const z: number;
    }
}
declare module "svg-path-commander/src/parser/finalizeSegment" {
    /**
     * Breaks the parsing of a pathString once a segment is finalized.
     *
     * @param {SVGPathCommander.PathParser} path the `PathParser` instance
     */
    export default function finalizeSegment(path: SVGPathCommander.PathParser): void;
}
declare module "svg-path-commander/src/parser/invalidPathValue" {
    export default invalidPathValue;
    const invalidPathValue: "Invalid path value";
}
declare module "svg-path-commander/src/parser/scanFlag" {
    /**
     * Validates an A (arc-to) specific path command value.
     * Usually a `large-arc-flag` or `sweep-flag`.
     *
     * @param {SVGPathCommander.PathParser} path the `PathParser` instance
     */
    export default function scanFlag(path: SVGPathCommander.PathParser): void;
}
declare module "svg-path-commander/src/parser/isDigit" {
    /**
     * Checks if a character is a digit.
     *
     * @param {number} code the character to check
     * @returns {boolean} check result
     */
    export default function isDigit(code: number): boolean;
}
declare module "svg-path-commander/src/parser/scanParam" {
    /**
     * Validates every character of the path string,
     * every path command, negative numbers or floating point numbers.
     *
     * @param {SVGPathCommander.PathParser} path the `PathParser` instance
     */
    export default function scanParam(path: SVGPathCommander.PathParser): void;
}
declare module "svg-path-commander/src/parser/isSpace" {
    /**
     * Checks if the character is a space.
     *
     * @param {number} ch the character to check
     * @returns {boolean} check result
     */
    export default function isSpace(ch: number): boolean;
}
declare module "svg-path-commander/src/parser/skipSpaces" {
    /**
     * Points the parser to the next character in the
     * path string every time it encounters any kind of
     * space character.
     *
     * @param {SVGPathCommander.PathParser} path the `PathParser` instance
     */
    export default function skipSpaces(path: SVGPathCommander.PathParser): void;
}
declare module "svg-path-commander/src/parser/isPathCommand" {
    /**
     * Checks if the character is a path command.
     *
     * @param {any} code the character to check
     * @returns {boolean} check result
     */
    export default function isPathCommand(code: any): boolean;
}
declare module "svg-path-commander/src/parser/isDigitStart" {
    /**
     * Checks if the character is or belongs to a number.
     * [0-9]|+|-|.
     *
     * @param {number} code the character to check
     * @returns {boolean} check result
     */
    export default function isDigitStart(code: number): boolean;
}
declare module "svg-path-commander/src/parser/isArcCommand" {
    /**
     * Checks if the character is an A (arc-to) path command.
     *
     * @param {number} code the character to check
     * @returns {boolean} check result
     */
    export default function isArcCommand(code: number): boolean;
}
declare module "svg-path-commander/src/parser/scanSegment" {
    /**
     * Scans every character in the path string to determine
     * where a segment starts and where it ends.
     *
     * @param {SVGPathCommander.PathParser} path the `PathParser` instance
     */
    export default function scanSegment(path: SVGPathCommander.PathParser): void;
}
declare module "svg-path-commander/src/process/clonePath" {
    /**
     * Returns a clone of an existing `pathArray`.
     *
     * @param {SVGPathCommander.pathArray | SVGPathCommander.pathSegment} path the source `pathArray`
     * @returns {any} the cloned `pathArray`
     */
    export default function clonePath(path: SVGPathCommander.pathArray | SVGPathCommander.pathSegment): any;
}
declare module "svg-path-commander/src/parser/pathParser" {
    /**
     * The `PathParser` used by the parser.
     *
     * @param {string} pathString
     */
    export default function PathParser(pathString: string): void;
    export default class PathParser {
        /**
         * The `PathParser` used by the parser.
         *
         * @param {string} pathString
         */
        constructor(pathString: string);
        /** @type {SVGPathCommander.pathArray} */
        segments: SVGPathCommander.pathArray;
        /** @type {string} */
        pathValue: string;
        /** @type {number} */
        max: number;
        /** @type {number} */
        index: number;
        /** @type {number} */
        param: number;
        /** @type {number} */
        segmentStart: number;
        /** @type {any} */
        data: any;
        /** @type {string} */
        err: string;
    }
}
declare module "svg-path-commander/src/util/isPathArray" {
    /**
     * Iterates an array to check if it's an actual `pathArray`.
     *
     * @param {string | SVGPathCommander.pathArray} path the `pathArray` to be checked
     * @returns {boolean} iteration result
     */
    export default function isPathArray(path: string | SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/parser/parsePathString" {
    /**
     * Parses a path string value and returns an array
     * of segments we like to call `pathArray`.
     *
     * @param {SVGPathCommander.pathArray | string} pathInput the string to be parsed
     * @returns {SVGPathCommander.pathArray} the resulted `pathArray`
     */
    export default function parsePathString(pathInput: SVGPathCommander.pathArray | string): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/util/isAbsoluteArray" {
    /**
     * Iterates an array to check if it's a `pathArray`
     * with all absolute values.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` to be checked
     * @returns {boolean} iteration result
     */
    export default function isAbsoluteArray(path: SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/convert/pathToAbsolute" {
    /**
     * Parses a path string value or object and returns an array
     * of segments, all converted to absolute values.
     *
     * @param {SVGPathCommander.pathArray} pathInput the path string | object
     * @returns {SVGPathCommander.absoluteArray} the resulted `pathArray` with absolute values
     */
    export default function pathToAbsolute(pathInput: SVGPathCommander.pathArray): SVGPathCommander.absoluteArray;
}
declare module "svg-path-commander/src/util/isRelativeArray" {
    /**
     * Iterates an array to check if it's a `pathArray`
     * with relative values.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` to be checked
     * @returns {boolean} iteration result
     */
    export default function isRelativeArray(path: SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/convert/pathToRelative" {
    /**
     * Parses a path string value or object and returns an array
     * of segments, all converted to relative values.
     *
     * @param {SVGPathCommander.pathArray} pathInput the path string | object
     * @returns {SVGPathCommander.relativeArray} the resulted `pathArray` with relative values
     */
    export default function pathToRelative(pathInput: SVGPathCommander.pathArray): SVGPathCommander.relativeArray;
}
declare module "svg-path-commander/src/process/fixArc" {
    /**
     * Splits an extended A (arc-to) segment into two cubic-bezier segments.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` this segment belongs to
     * @param {string[]} allPathCommands all previous path commands
     * @param {number} i the segment index
     */
    export default function fixArc(path: SVGPathCommander.pathArray, allPathCommands: string[], i: number): void;
}
declare module "svg-path-commander/src/process/shorthandToQuad" {
    /**
     * Returns the missing control point from an
     * T (shorthand quadratic bezier) segment.
     *
     * @param {number} x1 curve start x
     * @param {number} y1 curve start y
     * @param {number} qx control point x
     * @param {number} qy control point y
     * @param {string} prevCommand the previous path command
     * @returns {{qx: number, qy: number}}} the missing control point
     */
    export default function shorthandToQuad(x1: number, y1: number, qx: number, qy: number, prevCommand: string): {
        qx: number;
        qy: number;
    };
}
declare module "svg-path-commander/src/process/shorthandToCubic" {
    /**
     * Returns the missing control point from an
     * S (shorthand cubic bezier) segment.
     *
     * @param {number} x1 curve start x
     * @param {number} y1 curve start y
     * @param {number} x2 curve end x
     * @param {number} y2 curve end y
     * @param {string} prevCommand the previous path command
     * @returns {{x1: number, y1: number}}} the missing control point
     */
    export default function shorthandToCubic(x1: number, y1: number, x2: number, y2: number, prevCommand: string): {
        x1: number;
        y1: number;
    };
}
declare module "svg-path-commander/src/process/normalizeSegment" {
    /**
     * Normalizes a single segment of a `pathArray` object.
     *
     * @param {SVGPathCommander.pathSegment} segment the segment object
     * @param {any} params the coordinates of the previous segment
     * @param {string} prevCommand the path command of the previous segment
     * @returns {SVGPathCommander.normalSegment} the normalized segment
     */
    export default function normalizeSegment(segment: SVGPathCommander.pathSegment, params: any, prevCommand: string): SVGPathCommander.normalSegment;
}
declare module "svg-path-commander/src/util/isNormalizedArray" {
    /**
     * Iterates an array to check if it's a `pathArray`
     * with all segments are in non-shorthand notation
     * with absolute values.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` to be checked
     * @returns {boolean} iteration result
     */
    export default function isNormalizedArray(path: SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/parser/paramsParser" {
    export default paramsParser;
    /**
     * @type {SVGPathCommander.parserParams}
     */
    const paramsParser: SVGPathCommander.parserParams;
}
declare module "svg-path-commander/src/process/normalizePath" {
    /**
     * Normalizes a `path` object for further processing:
     * * convert segments to absolute values
     * * convert shorthand path commands to their non-shorthand notation
     *
     * @param {SVGPathCommander.pathArray} pathInput the string to be parsed or 'pathArray'
     * @returns {SVGPathCommander.normalArray} the normalized `pathArray`
     */
    export default function normalizePath(pathInput: SVGPathCommander.pathArray): SVGPathCommander.normalArray;
}
declare module "svg-path-commander/src/process/fixPath" {
    /**
     * Checks a `pathArray` for an unnecessary `Z` segment
     * and returns a new `pathArray` without it.
     *
     * The `pathInput` must be a single path, without
     * sub-paths. For multi-path `<path>` elements,
     * use `splitPath` first and apply this utility on each
     * sub-path separately.
     *
     * @param {SVGPathCommander.pathArray | string} pathInput the `pathArray` source
     * @return {SVGPathCommander.pathArray} a fixed `pathArray`
     */
    export default function fixPath(pathInput: string | SVGPathCommander.pathArray): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/util/isCurveArray" {
    /**
     * Iterates an array to check if it's a `pathArray`
     * with all C (cubic bezier) segments.
     *
     * @param {SVGPathCommander.pathArray} path the `Array` to be checked
     * @returns {boolean} iteration result
     */
    export default function isCurveArray(path: SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/math/rotateVector" {
    /**
     * Returns an {x,y} vector rotated by a given
     * angle in radian.
     *
     * @param {number} x the initial vector x
     * @param {number} y the initial vector y
     * @param {number} rad the radian vector angle
     * @returns {{x: number, y: number}} the rotated vector
     */
    export default function rotateVector(x: number, y: number, rad: number): {
        x: number;
        y: number;
    };
}
declare module "svg-path-commander/src/process/arcToCubic" {
    /**
     * Converts A (arc-to) segments to C (cubic-bezier-to).
     *
     * For more information of where this math came from visit:
     * http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
     *
     * @param {number} X1 the starting x position
     * @param {number} Y1 the starting y position
     * @param {number} RX x-radius of the arc
     * @param {number} RY y-radius of the arc
     * @param {number} angle x-axis-rotation of the arc
     * @param {number} LAF large-arc-flag of the arc
     * @param {number} SF sweep-flag of the arc
     * @param {number} X2 the ending x position
     * @param {number} Y2 the ending y position
     * @param {number[]=} recursive the parameters needed to split arc into 2 segments
     * @return {number[]} the resulting cubic-bezier segment(s)
     */
    export default function arcToCubic(X1: number, Y1: number, RX: number, RY: number, angle: number, LAF: number, SF: number, X2: number, Y2: number, recursive?: number[] | undefined): number[];
}
declare module "svg-path-commander/src/process/quadToCubic" {
    /**
     * Converts a Q (quadratic-bezier) segment to C (cubic-bezier).
     *
     * @param {number} x1 curve start x
     * @param {number} y1 curve start y
     * @param {number} qx control point x
     * @param {number} qy control point y
     * @param {number} x2 curve end x
     * @param {number} y2 curve end y
     * @returns {number[]} the cubic-bezier segment
     */
    export default function quadToCubic(x1: number, y1: number, qx: number, qy: number, x2: number, y2: number): number[];
}
declare module "svg-path-commander/src/util/getPointAtSegLength" {
    /**
     * Returns the {x,y} coordinates of a point at a
     * given length of a cubic-bezier segment.
     *
     * @param {number} p1x the starting point X
     * @param {number} p1y the starting point Y
     * @param {number} c1x the first control point X
     * @param {number} c1y the first control point Y
     * @param {number} c2x the second control point X
     * @param {number} c2y the second control point Y
     * @param {number} p2x the ending point X
     * @param {number} p2y the ending point Y
     * @param {number} t a [0-1] ratio
     * @returns {{x: number, y: number}} the requested {x,y} coordinates
     */
    export default function getPointAtSegLength(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number, t: number): {
        x: number;
        y: number;
    };
}
declare module "svg-path-commander/src/math/midPoint" {
    /**
     * Returns the coordinates of a specified distance
     * ratio between two points.
     *
     * @param {[number, number]} a the first point coordinates
     * @param {[number, number]} b the second point coordinates
     * @param {number} t the ratio
     * @returns {[number, number]} the midpoint coordinates
     */
    export default function midPoint(a: [number, number], b: [number, number], t: number): [number, number];
}
declare module "svg-path-commander/src/process/lineToCubic" {
    /**
     * Converts an L (line-to) segment to C (cubic-bezier).
     *
     * @param {number} x1 line start x
     * @param {number} y1 line start y
     * @param {number} x2 line end x
     * @param {number} y2 line end y
     * @returns {number[]} the cubic-bezier segment
     */
    export default function lineToCubic(x1: number, y1: number, x2: number, y2: number): number[];
}
declare module "svg-path-commander/src/process/segmentToCubic" {
    /**
     * Converts any segment to C (cubic-bezier).
     *
     * @param {SVGPathCommander.pathSegment} segment the source segment
     * @param {SVGPathCommander.parserParams} params the source segment parameters
     * @returns {SVGPathCommander.cubicSegment | SVGPathCommander.MSegment} the cubic-bezier segment
     */
    export default function segmentToCubic(segment: SVGPathCommander.pathSegment, params: SVGPathCommander.parserParams): SVGPathCommander.cubicSegment | SVGPathCommander.MSegment;
}
declare module "svg-path-commander/src/convert/pathToCurve" {
    /**
     * Parses a path string value or 'pathArray' and returns a new one
     * in which all segments are converted to cubic-bezier.
     *
     * In addition, un-necessary `Z` segment is removed if previous segment
     * extends to the `M` segment.
     *
     * @param {SVGPathCommander.pathArray} pathInput the string to be parsed or 'pathArray'
     * @returns {SVGPathCommander.curveArray} the resulted `pathArray` converted to cubic-bezier
     */
    export default function pathToCurve(pathInput: SVGPathCommander.pathArray): SVGPathCommander.curveArray;
}
declare module "svg-path-commander/src/options/options" {
    export default defaultOptions;
    /**
     * SVGPathCommander default options
     * @type {SVGPathCommander.options}
     */
    const defaultOptions: SVGPathCommander.options;
}
declare module "svg-path-commander/src/process/roundPath" {
    /**
     * Rounds the values of a `pathArray` instance to
     * a specified amount of decimals and returns it.
     *
     * @param {SVGPathCommander.pathArray} path the source `pathArray`
     * @param {number | boolean} roundOption the amount of decimals to round numbers to
     * @returns {SVGPathCommander.pathArray} the resulted `pathArray` with rounded values
     */
    export default function roundPath(path: SVGPathCommander.pathArray, roundOption: number | boolean): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/convert/pathToString" {
    /**
     * Returns a valid `d` attribute string value created
     * by rounding values and concatenating the `pathArray` segments.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` object
     * @param {any} round amount of decimals to round values to
     * @returns {string} the concatenated path string
     */
    export default function pathToString(path: SVGPathCommander.pathArray, round: any): string;
}
declare module "svg-path-commander/src/math/distanceSquareRoot" {
    /**
     * Returns the square root of the distance
     * between two given points.
     *
     * @param {Number[][]} a the first point coordinates
     * @param {Number[][]} b the second point coordinates
     * @returns {Number} the distance value
     */
    export default function distanceSquareRoot(a: number[][], b: number[][]): number;
}
declare module "svg-path-commander/src/math/epsilon" {
    export default epsilon;
    /**
     * A global namespace for epsilon.
     *
     * @type {number}
     */
    const epsilon: number;
}
declare module "svg-path-commander/src/math/polygonArea" {
    /**
     * d3-polygon-area
     * https://github.com/d3/d3-polygon
     *
     * Returns the area of a polygon.
     *
     * @param {Number[][]} polygon an array of coordinates
     * @returns {Number} the polygon area
     */
    export default function polygonArea(polygon: number[][]): number;
}
declare module "svg-path-commander/src/math/polygonLength" {
    /**
     * d3-polygon-length
     * https://github.com/d3/d3-polygon
     *
     * Returns the perimeter of a polygon.
     *
     * @param {Number[][]} polygon an array of coordinates
     * @returns {Number} the polygon length
     */
    export default function polygonLength(polygon: number[][]): number;
}
declare module "svg-path-commander/src/process/getSVGMatrix" {
    /**
     * Returns a transformation matrix to apply to `<path>` elements.
     *
     * @see SVGPathCommander.transformObject
     *
     * @param {SVGPathCommander.transformObject} transform the `transformObject`
     * @returns {CSSMatrix} a new transformation matrix
     */
    export default function getSVGMatrix(transform: SVGPathCommander.transformObject): CSSMatrix;
    import CSSMatrix from "dommatrix";
}
declare module "svg-path-commander/src/process/shortenSegment" {
    /**
     * Shorten a single segment of a `pathArray` object.
     *
     * @param {SVGPathCommander.pathSegment} segment the segment object
     * @param {any} params the coordinates of the previous segment
     * @param {string} prevCommand the path command of the previous segment
     * @returns {SVGPathCommander.shortSegment | SVGPathCommander.pathSegment} the shortened segment
     */
    export default function shortenSegment(segment: SVGPathCommander.pathSegment, params: any, prevCommand: string): SVGPathCommander.shortSegment | SVGPathCommander.pathSegment;
}
declare module "svg-path-commander/src/process/optimizePath" {
    /**
     * Optimizes a `pathArray` object:
     * * convert segments to shorthand if possible
     * * select shortest segments from absolute and relative `pathArray`s
     *
     * TO DO
     * * implement `auto` for rounding values based on pathBBox
     * * also revers path check if it's smaller string, maybe?
     *
     * @param {SVGPathCommander.pathArray} pathInput a string or `pathArray`
     * @param {number | boolean} round the amount of decimals to round values to
     * @returns {SVGPathCommander.pathArray} the optimized `pathArray`
     */
    export default function optimizePath(pathInput: SVGPathCommander.pathArray, round: number | boolean): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/process/projection2d" {
    /**
     * Returns the [x,y] projected coordinates for a given an [x,y] point
     * and an [x,y,z] perspective origin point.
     *
     * Equation found here =>
     * http://en.wikipedia.org/wiki/3D_projection#Diagram
     * Details =>
     * https://stackoverflow.com/questions/23792505/predicted-rendering-of-css-3d-transformed-pixel
     *
     * @param {SVGPathCommander.CSSMatrix} m the transformation matrix
     * @param {[number, number]} point2D the initial [x,y] coordinates
     * @param {number[]} origin the initial [x,y] coordinates
     * @returns {[number, number]} the projected [x,y] coordinates
     */
    export default function projection2d(m: SVGPathCommander.CSSMatrix, point2D: [number, number], origin: number[]): [number, number];
}
declare module "svg-path-commander/src/process/reverseCurve" {
    /**
     * Reverses all segments and their values from a `pathArray`
     * which consists of only C (cubic-bezier) path commands.
     *
     * @param {SVGPathCommander.curveArray} path the source `pathArray`
     * @returns {SVGPathCommander.curveArray} the reversed `pathArray`
     */
    export default function reverseCurve(path: SVGPathCommander.curveArray): SVGPathCommander.curveArray;
}
declare module "svg-path-commander/src/process/reversePath" {
    /**
     * Reverses all segments and their values of a `pathArray`
     * and returns a new instance.
     *
     * @param {SVGPathCommander.pathArray} pathInput the source `pathArray`
     * @returns {SVGPathCommander.pathArray} the reversed `pathArray`
     */
    export default function reversePath(pathInput: SVGPathCommander.pathArray): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/process/splitCubic" {
    /**
     * Split a cubic-bezier segment into two.
     *
     * @param {number[]} pts the cubic-bezier parameters
     * @return {[string, ...number[]][]} two new cubic-bezier segments
     */
    export default function splitCubic(pts: number[]): [string, ...number[]][];
}
declare module "svg-path-commander/src/process/splitPath" {
    /**
     * Split a path into an `Array` of sub-path strings.
     *
     * In the process, values are converted to absolute
     * for visual consistency.
     *
     * @param {SVGPathCommander.pathArray | string} pathInput the source `pathArray`
     * @return {string[]} an array with all sub-path strings
     */
    export default function splitPath(pathInput: SVGPathCommander.pathArray | string): string[];
}
declare module "svg-path-commander/src/process/transformEllipse" {
    /**
     * Apply a 2D transformation matrix to an ellipse.
     *
     * @param {number[]} m the 2D transformation matrix
     * @param {number} rx ellipse radius X
     * @param {number} ry ellipse radius Y
     * @param {number} ax ellipse rotation angle
     */
    export default function transformEllipse(m: number[], rx: number, ry: number, ax: number): {
        rx: number;
        ry: number;
        ax: number;
    };
}
declare module "svg-path-commander/src/process/transformPath" {
    /**
     * Apply a 2D / 3D transformation to a `pathArray` instance.
     *
     * Since *SVGElement* doesn't support 3D transformation, this function
     * creates a 2D projection of the <path> element.
     *
     * @param {SVGPathCommander.pathArray} path the `pathArray` to apply transformation
     * @param {SVGPathCommander.transformObject} transform the transform functions `Object`
     * @returns {SVGPathCommander.pathArray} the resulted `pathArray`
     */
    export default function transformPath(path: SVGPathCommander.pathArray, transform: SVGPathCommander.transformObject): SVGPathCommander.pathArray;
}
declare module "svg-path-commander/src/util/shapeToPath" {
    /**
     * Returns a new `pathArray` from line attributes.
     *
     * @param {SVGPathCommander.lineAttr} attr shape configuration
     * @returns {SVGPathCommander.pathArray} a new line `pathArray`
     */
    export function getLinePath(attr: SVGPathCommander.lineAttr): SVGPathCommander.pathArray;
    /**
     * Returns a new `pathArray` like from polyline/polygon attributes.
     *
     * @param {SVGPathCommander.polyAttr} attr shape configuration
     * @return {SVGPathCommander.pathArray} a new polygon/polyline `pathArray`
     */
    export function getPolyPath(attr: SVGPathCommander.polyAttr): SVGPathCommander.pathArray;
    /**
     * Returns a new `pathArray` from circle attributes.
     *
     * @param {SVGPathCommander.circleAttr} attr shape configuration
     * @return {SVGPathCommander.pathArray} a circle `pathArray`
     */
    export function getCirclePath(attr: SVGPathCommander.circleAttr): SVGPathCommander.pathArray;
    /**
     * Returns a new `pathArray` from ellipse attributes.
     *
     * @param {SVGPathCommander.ellipseAttr} attr shape configuration
     * @return {SVGPathCommander.pathArray} an ellipse `pathArray`
     */
    export function getEllipsePath(attr: SVGPathCommander.ellipseAttr): SVGPathCommander.pathArray;
    /**
     * Returns a new `pathArray` like from rect attributes.
     *
     * @param {SVGPathCommander.rectAttr} attr object with properties above
     * @return {SVGPathCommander.pathArray} a new `pathArray` from `<rect>` attributes
     */
    export function getRectanglePath(attr: SVGPathCommander.rectAttr): SVGPathCommander.pathArray;
    /**
     * Returns a new `<path>` element created from attributes of a `<line>`, `<polyline>`,
     * `<polygon>`, `<rect>`, `<ellipse>`, `<circle>` or `<glyph>`. If `replace` parameter
     * is `true`, it will replace the target.
     *
     * It can also work with an options object,
     * @see SVGPathCommander.shapeOps
     *
     * The newly created `<path>` element keeps all non-specific
     * attributes like `class`, `fill`, etc.
     *
     * @param {SVGPathCommander.shapeTypes | SVGPathCommander.shapeOps} element target shape
     * @param {boolean} replace option to replace target
     * @return {SVGPathElement | boolean} the newly created `<path>` element
     */
    export default function shapeToPath(element: SVGPathCommander.shapeTypes | SVGPathCommander.shapeOps, replace: boolean): SVGPathElement | boolean;
}
declare module "svg-path-commander/src/util/createPath" {
    /**
     * Returns a new `<path>` from a `<glyph>` element, only using its `d` attribute,
     * all other attributes are ignored.
     *
     * If `pathInput` is a valid path string, will create a `<path>` and return it.
     *
     * @deprecated
     * @see shapeToPath a new and more flexible utility
     *
     * @param {SVGElement | String} pathInput a `<glyph>` element or path string
     * @returns {SVGPathElement} a new `<path>` element
     */
    export default function createPath(pathInput: SVGElement | string): SVGPathElement;
}
declare module "svg-path-commander/src/util/getCubicSize" {
    /**
     * Returns the cubic-bezier segment length.
     *
     * @param {number} p1x the starting point X
     * @param {number} p1y the starting point Y
     * @param {number} c1x the first control point X
     * @param {number} c1y the first control point Y
     * @param {number} c2x the second control point X
     * @param {number} c2y the second control point Y
     * @param {number} p2x the ending point X
     * @param {number} p2y the ending point Y
     * @returns {SVGPathCommander.segmentLimits} the length of the cubic-bezier segment
     */
    export default function getCubicSize(p1x: number, p1y: number, c1x: number, c1y: number, c2x: number, c2y: number, p2x: number, p2y: number): SVGPathCommander.segmentLimits;
}
declare module "svg-path-commander/src/util/getPathArea" {
    /**
     * Returns the area of a shape.
     * @author Jürg Lehni & Jonathan Puckey
     *
     * => https://github.com/paperjs/paper.js/blob/develop/src/path/Path.js
     *
     * @param {SVGPathCommander.pathArray} path the shape `pathArray`
     * @returns {number} the length of the cubic-bezier segment
     */
    export default function getPathArea(path: SVGPathCommander.pathArray): number;
}
declare module "svg-path-commander/src/util/getDrawDirection" {
    /**
     * Check if a path is drawn clockwise and returns true if so,
     * false otherwise.
     *
     * @param {string | SVGPathCommander.pathArray} path the path string or `pathArray`
     * @returns {boolean} true when clockwise or false if not
     */
    export default function getDrawDirection(path: string | SVGPathCommander.pathArray): boolean;
}
declare module "svg-path-commander/src/util/getPathBBox" {
    /**
     * Returns the bounding box of a shape.
     *
     * @param {SVGPathCommander.pathArray} path the shape `pathArray`
     * @returns {SVGPathCommander.pathBBox} the length of the cubic-bezier segment
     */
    export default function getPathBBox(path: SVGPathCommander.pathArray): SVGPathCommander.pathBBox;
}
declare module "svg-path-commander/src/util/getSegCubicLength" {
    /**
     * Returns the C (cubic-bezier) segment length.
     *
     * @param {number} x1 the starting point X
     * @param {number} y1 the starting point Y
     * @param {number} x2 the first control point X
     * @param {number} y2 the first control point Y
     * @param {number} x3 the second control point X
     * @param {number} y3 the second control point Y
     * @param {number} x4 the ending point X
     * @param {number} y4 the ending point Y
     * @param {number} z a [0-1] ratio
     * @returns {number} the cubic-bezier segment length
     */
    export default function getSegCubicLength(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, z: number): number;
}
declare module "svg-path-commander/src/util/getPathLength" {
    /**
     * Returns the shape total length,
     * or the equivalent to `shape.getTotalLength()`
     * pathToCurve version
     *
     * @param {SVGPathCommander.pathArray} path the ending point Y
     * @returns {number} the shape total length
     */
    export default function getPathLength(path: SVGPathCommander.pathArray): number;
}
declare module "svg-path-commander/src/util/getPointAtLength" {
    /**
     * Returns [x,y] coordinates of a point at a given length of a shape.
     *
     * @param {string | SVGPathCommander.pathArray} path the `pathArray` to look into
     * @param {number} length the length of the shape to look at
     * @returns {number[]} the requested [x,y] coordinates
     */
    export default function getPointAtLength(path: string | SVGPathCommander.pathArray, length: number): number[];
}
declare module "svg-path-commander/src/util/getSegArcLength" {
    /**
     * Returns the A (arc-to) segment length.
     *
     * @param {number[]} arguments the arc-to coordinates
     * @returns {number} the arc-to segment length
     */
    export default function getSegArcLength(...args: any[]): number;
}
declare module "svg-path-commander/src/util/getSegLineLength" {
    /**
     * Returns the L (line-to) segment length.
     *
     * @param {number} ax the starting point X
     * @param {number} ay the starting point Y
     * @param {number} bx the ending point X
     * @param {number} by the ending point Y
     * @returns {number} the line-to segment length
     */
    export default function getSegLineLength(ax: number, ay: number, bx: number, by: number): number;
}
declare module "svg-path-commander/src/util/getSegQuadLength" {
    /**
     * Returns the Q (quadratic-bezier) segment length.
     * https://gist.github.com/tunght13488/6744e77c242cc7a94859#gistcomment-2047251
     *
     * @param {number} x1 the starting point X
     * @param {number} y1 the starting point Y
     * @param {number} qx the control point X
     * @param {number} qy the control point Y
     * @param {number} x2 the ending point X
     * @param {number} y2 the ending point Y
     * @param {number} z a [0-1] ratio
     * @returns {number} the quadratic-bezier segment length
     */
    export default function getSegQuadLength(x1: number, y1: number, qx: number, qy: number, x2: number, y2: number): number;
}
declare module "svg-path-commander/src/util/isValidPath" {
    /**
     * Parses a path string value to determine its validity
     * then returns true if it's valid or false otherwise.
     *
     * @param {string} pathString the path string to be parsed
     * @returns {boolean} the path string validity
     */
    export default function isValidPath(pathString: string): boolean;
}
declare module "svg-path-commander/src/util/version" {
    export default Version;
    /**
     * A global namespace for library version.
     * @type {string}
     */
    const Version: string;
}
declare module "svg-path-commander/src/util/util" {
    export default Util;
    namespace Util {
        export { CSSMatrix };
        export { parsePathString };
        export { isPathArray };
        export { isCurveArray };
        export { isAbsoluteArray };
        export { isRelativeArray };
        export { isNormalizedArray };
        export { isValidPath };
        export { pathToAbsolute };
        export { pathToRelative };
        export { pathToCurve };
        export { pathToString };
        export { getDrawDirection };
        export { getPathArea };
        export { getPathBBox };
        export { getPathLength };
        export { getPointAtLength };
        export { clonePath };
        export { splitPath };
        export { fixPath };
        export { roundPath };
        export { optimizePath };
        export { reverseCurve };
        export { reversePath };
        export { normalizePath };
        export { transformPath };
        export { shapeToPath };
        export { defaultOptions as options };
        export { Version };
    }
    import CSSMatrix from "dommatrix";
    import parsePathString from "svg-path-commander/src/parser/parsePathString";
    import isPathArray from "svg-path-commander/src/util/isPathArray";
    import isCurveArray from "svg-path-commander/src/util/isCurveArray";
    import isAbsoluteArray from "svg-path-commander/src/util/isAbsoluteArray";
    import isRelativeArray from "svg-path-commander/src/util/isRelativeArray";
    import isNormalizedArray from "svg-path-commander/src/util/isNormalizedArray";
    import isValidPath from "svg-path-commander/src/util/isValidPath";
    import pathToAbsolute from "svg-path-commander/src/convert/pathToAbsolute";
    import pathToRelative from "svg-path-commander/src/convert/pathToRelative";
    import pathToCurve from "svg-path-commander/src/convert/pathToCurve";
    import pathToString from "svg-path-commander/src/convert/pathToString";
    import getDrawDirection from "svg-path-commander/src/util/getDrawDirection";
    import getPathArea from "svg-path-commander/src/util/getPathArea";
    import getPathBBox from "svg-path-commander/src/util/getPathBBox";
    import getPathLength from "svg-path-commander/src/util/getPathLength";
    import getPointAtLength from "svg-path-commander/src/util/getPointAtLength";
    import clonePath from "svg-path-commander/src/process/clonePath";
    import splitPath from "svg-path-commander/src/process/splitPath";
    import fixPath from "svg-path-commander/src/process/fixPath";
    import roundPath from "svg-path-commander/src/process/roundPath";
    import optimizePath from "svg-path-commander/src/process/optimizePath";
    import reverseCurve from "svg-path-commander/src/process/reverseCurve";
    import reversePath from "svg-path-commander/src/process/reversePath";
    import normalizePath from "svg-path-commander/src/process/normalizePath";
    import transformPath from "svg-path-commander/src/process/transformPath";
    import shapeToPath from "svg-path-commander/src/util/shapeToPath";
    import defaultOptions from "svg-path-commander/src/options/options";
    import Version from "svg-path-commander/src/util/version";
}
declare module "svg-path-commander/src/svg-path-commander" {
    export default SVGPathCommander;
    /**
     * Creates a new SVGPathCommander instance with the following properties:
     * * segments: `pathArray`
     * * round: number
     * * origin: [number, number, number?]
     *
     * @class
     * @author thednp <https://github.com/thednp/svg-path-commander>
     * @returns {SVGPathCommander} a new SVGPathCommander instance
     */
    class SVGPathCommander {
        /**
         * @constructor
         * @param {string} pathValue the path string
         * @param {any} config instance options
         */
        constructor(pathValue: string, config: any);
        /**
         * @type {SVGPathCommander.pathArray}
         */
        segments: SVGPathCommander.pathArray;
        /**
         * @type {number | boolean}
         * @default 4
         */
        round: number | boolean;
        /**
         * @default [0,0]
         */
        origin: number[];
        /**
         * Convert path to absolute values
         * @public
         */
        public toAbsolute(): SVGPathCommander;
        /**
         * Convert path to relative values
         * @public
         */
        public toRelative(): SVGPathCommander;
        /**
         * Convert path to cubic-bezier values. In addition, un-necessary `Z`
         * segment is removed if previous segment extends to the `M` segment.
         *
         * @public
         */
        public toCurve(): SVGPathCommander;
        /**
         * Reverse the order of the segments and their values.
         * @param {boolean | number} onlySubpath option to reverse all sub-paths except first
         * @public
         */
        public reverse(onlySubpath: boolean | number): SVGPathCommander;
        /**
         * Normalize path in 2 steps:
         * * convert `pathArray`(s) to absolute values
         * * convert shorthand notation to standard notation
         * @public
         */
        public normalize(): SVGPathCommander;
        /**
         * Optimize `pathArray` values:
         * * convert segments to absolute and/or relative values
         * * select segments with shortest resulted string
         * * round values to the specified `decimals` option value
         * @public
         */
        public optimize(): SVGPathCommander;
        /**
         * Transform path using values from an `Object` defined as `transformObject`.
         * @see SVGPathCommander.transformObject for a quick refference
         *
         * @param {SVGPathCommander.transformObject} source a `transformObject`as described above
         * @public
         */
        public transform(source: SVGPathCommander.transformObject): SVGPathCommander;
        /**
         * Rotate path 180deg horizontally
         * @public
         */
        public flipX(): SVGPathCommander;
        /**
         * Rotate path 180deg vertically
         * @public
         */
        public flipY(): SVGPathCommander;
        /**
         * Export the current path to be used
         * for the `d` (description) attribute.
         * @public
         * @return {String} the path string
         */
        public toString(): string;
    }
}
declare module "svg-path-commander/types/more/modules" {
    export { default as pathToAbsolute } from "svg-path-commander/src/convert/pathToAbsolute";
    export { default as pathToRelative } from "svg-path-commander/src/convert/pathToRelative";
    export { default as pathToCurve } from "svg-path-commander/src/convert/pathToCurve";
    export { default as pathToString } from "svg-path-commander/src/convert/pathToString";
    export { default as distanceSquareRoot } from "svg-path-commander/src/math/distanceSquareRoot";
    export { default as epsilon } from "svg-path-commander/src/math/epsilon";
    export { default as midPoint } from "svg-path-commander/src/math/midPoint";
    export { default as polygonArea } from "svg-path-commander/src/math/polygonArea";
    export { default as polygonLength } from "svg-path-commander/src/math/polygonLength";
    export { default as rotateVector } from "svg-path-commander/src/math/rotateVector";
    export { default as defaultOptions } from "svg-path-commander/src/options/options";
    export { default as finalizeSegment } from "svg-path-commander/src/parser/finalizeSegment";
    export { default as invalidPathValue } from "svg-path-commander/src/parser/invalidPathValue";
    export { default as isArcCommand } from "svg-path-commander/src/parser/isArcCommand";
    export { default as isDigit } from "svg-path-commander/src/parser/isDigit";
    export { default as isDigitStart } from "svg-path-commander/src/parser/isDigitStart";
    export { default as isPathCommand } from "svg-path-commander/src/parser/isPathCommand";
    export { default as isSpace } from "svg-path-commander/src/parser/isSpace";
    export { default as paramsCount } from "svg-path-commander/src/parser/paramsCount";
    export { default as paramsParser } from "svg-path-commander/src/parser/paramsParser";
    export { default as parsePathString } from "svg-path-commander/src/parser/parsePathString";
    export { default as PathParser } from "svg-path-commander/src/parser/pathParser";
    export { default as scanFlag } from "svg-path-commander/src/parser/scanFlag";
    export { default as scanParam } from "svg-path-commander/src/parser/scanParam";
    export { default as scanSegment } from "svg-path-commander/src/parser/scanSegment";
    export { default as skipSpaces } from "svg-path-commander/src/parser/skipSpaces";
    export { default as arcToCubic } from "svg-path-commander/src/process/arcToCubic";
    export { default as clonePath } from "svg-path-commander/src/process/clonePath";
    export { default as fixArc } from "svg-path-commander/src/process/fixArc";
    export { default as fixPath } from "svg-path-commander/src/process/fixPath";
    export { default as getSVGMatrix } from "svg-path-commander/src/process/getSVGMatrix";
    export { default as lineToCubic } from "svg-path-commander/src/process/lineToCubic";
    export { default as normalizePath } from "svg-path-commander/src/process/normalizePath";
    export { default as normalizeSegment } from "svg-path-commander/src/process/normalizeSegment";
    export { default as optimizePath } from "svg-path-commander/src/process/optimizePath";
    export { default as projection2d } from "svg-path-commander/src/process/projection2d";
    export { default as quadToCubic } from "svg-path-commander/src/process/quadToCubic";
    export { default as reverseCurve } from "svg-path-commander/src/process/reverseCurve";
    export { default as reversePath } from "svg-path-commander/src/process/reversePath";
    export { default as roundPath } from "svg-path-commander/src/process/roundPath";
    export { default as segmentToCubic } from "svg-path-commander/src/process/segmentToCubic";
    export { default as shortenSegment } from "svg-path-commander/src/process/shortenSegment";
    export { default as shorthandToCubic } from "svg-path-commander/src/process/shorthandToCubic";
    export { default as shorthandToQuad } from "svg-path-commander/src/process/shorthandToQuad";
    export { default as splitCubic } from "svg-path-commander/src/process/splitCubic";
    export { default as splitPath } from "svg-path-commander/src/process/splitPath";
    export { default as transformEllipse } from "svg-path-commander/src/process/transformEllipse";
    export { default as transformPath } from "svg-path-commander/src/process/transformPath";
    export { default as createPath } from "svg-path-commander/src/util/createPath";
    export { default as getCubicSize } from "svg-path-commander/src/util/getCubicSize";
    export { default as getDrawDirection } from "svg-path-commander/src/util/getDrawDirection";
    export { default as getPathArea } from "svg-path-commander/src/util/getPathArea";
    export { default as getPathBBox } from "svg-path-commander/src/util/getPathBBox";
    export { default as getPathLength } from "svg-path-commander/src/util/getPathLength";
    export { default as getPointAtLength } from "svg-path-commander/src/util/getPointAtLength";
    export { default as getPointAtSegLength } from "svg-path-commander/src/util/getPointAtSegLength";
    export { default as getSegArcLength } from "svg-path-commander/src/util/getSegArcLength";
    export { default as getSegCubicLength } from "svg-path-commander/src/util/getSegCubicLength";
    export { default as getSegLineLength } from "svg-path-commander/src/util/getSegLineLength";
    export { default as getSegQuadLength } from "svg-path-commander/src/util/getSegQuadLength";
    export { default as isAbsoluteArray } from "svg-path-commander/src/util/isAbsoluteArray";
    export { default as isCurveArray } from "svg-path-commander/src/util/isCurveArray";
    export { default as isNormalizedArray } from "svg-path-commander/src/util/isNormalizedArray";
    export { default as isPathArray } from "svg-path-commander/src/util/isPathArray";
    export { default as isRelativeArray } from "svg-path-commander/src/util/isRelativeArray";
    export { default as isValidPath } from "svg-path-commander/src/util/isValidPath";
    export { default as shapeToPath } from "svg-path-commander/src/util/shapeToPath";
    export { default as Version } from "svg-path-commander/src/util/version";
    export { default as SVGPathCommander } from "svg-path-commander/src/svg-path-commander";
}
