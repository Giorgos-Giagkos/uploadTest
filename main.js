// export{}
// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,'b'];
// const ColorRed =0
// const ColorGreen = 1;
// const ColorBlue = 2;
// enum Color {Red = 0,Green = 1,Blue = 2};
// let backgroundColor = Color.Red;
// let message ;
// message = 'abc';
// let endsWithC =(<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('x:' + this._x + ', y:' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('valid is 0');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
point.x = 2;
