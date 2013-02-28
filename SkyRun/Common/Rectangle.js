var SkyRun;
(function (SkyRun) {
    (function (Common) {
        var Rectangle = (function () {
            function Rectangle(left, top, width, height) {
                this._left = left;
                this._top = top;
                this._width = width;
                this._height = height;
            }
            Object.defineProperty(Rectangle.prototype, "Top", {
                get: function () {
                    return this._top;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Left", {
                get: function () {
                    return this._left;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Width", {
                get: function () {
                    return this._width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Rectangle.prototype, "Height", {
                get: function () {
                    return this._height;
                },
                enumerable: true,
                configurable: true
            });
            return Rectangle;
        })();
        Common.Rectangle = Rectangle;        
    })(SkyRun.Common || (SkyRun.Common = {}));
    var Common = SkyRun.Common;
})(SkyRun || (SkyRun = {}));
//@ sourceMappingURL=Rectangle.js.map
