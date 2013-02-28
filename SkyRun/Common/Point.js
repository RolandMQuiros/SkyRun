var SkyRun;
(function (SkyRun) {
    (function (Common) {
        var Point = (function () {
            function Point(x, y) {
                this._x = x;
                this._y = y;
            }
            Object.defineProperty(Point.prototype, "X", {
                get: function () {
                    return this._x;
                },
                set: function (value) {
                    this._x = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Point.prototype, "Y", {
                get: function () {
                    return this._y;
                },
                set: function (value) {
                    this._y = value;
                },
                enumerable: true,
                configurable: true
            });
            return Point;
        })();
        Common.Point = Point;        
    })(SkyRun.Common || (SkyRun.Common = {}));
    var Common = SkyRun.Common;
})(SkyRun || (SkyRun = {}));
//@ sourceMappingURL=Point.js.map
