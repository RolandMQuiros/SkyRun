/// <reference path="jquery\jquery.ts" />
/// <reference path='Player\Player.ts'/>

module SkyRun {
    (function init() {
        $(window).ready(function() {
            TimeTick();
         });
    })();

    function Draw()
    {            
        var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('skyRunCanvas');
        var context: CanvasRenderingContext2D = canvas.getContext('2d');
        var player = new SkyRun.Player(new Common.Point(0, 0), new Common.Rectangle(0, 0, 50, 50));
        player.Draw(context);
    }

    function TimeTick() {
        Draw();
        setTimeout(TimeTick, 100);
    }
}