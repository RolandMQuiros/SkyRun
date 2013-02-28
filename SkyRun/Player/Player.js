///<reference path='..\Common\Point.ts'/>
///<reference path='..\Common\Rectangle.ts'/>
var SkyRun;
(function (SkyRun) {
    var Player = (function () {
        function Player(position, rectangle) {
            this._position = position;
            this._rectangle = rectangle;
        }
        Player.prototype.Draw = function (context) {
            var left = this._position.X - this._rectangle.Width / 2;
            var top = this._position.Y - this._rectangle.Height / 2;
            context.fillStyle = "rgb(200,0,0)";
            context.fillRect(left, top, this._rectangle.Width, this._rectangle.Height);
        };
        return Player;
    })();
    SkyRun.Player = Player;    
})(SkyRun || (SkyRun = {}));
//@ sourceMappingURL=Player.js.map
