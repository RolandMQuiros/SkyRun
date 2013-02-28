/// <reference path="jquery\jquery.ts" />
/// <reference path='Player\Player.ts'/>
var SkyRun;
(function (SkyRun) {
    var i = 0;
    (function init() {
        $(window).ready(function () {
            TimeTick();
        });
    })();
    function Draw() {
        var canvas = document.getElementById('skyRunCanvas');
        var context = canvas.getContext('2d');
        var player = new SkyRun.Player(new SkyRun.Common.Point(0, 0), new SkyRun.Common.Rectangle(0, 0, 50 + 10 * i, 50 + 10 * i));
        player.Draw(context);
    }
    function TimeTick() {
        i++;
        Draw();
        setTimeout(TimeTick, 100);
    }
})(SkyRun || (SkyRun = {}));
//@ sourceMappingURL=app.js.map
