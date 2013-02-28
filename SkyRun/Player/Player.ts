///<reference path='..\Common\Point.ts'/>
///<reference path='..\Common\Rectangle.ts'/>

module SkyRun {
    export class Player {
        private _position: SkyRun.Common.Point;
        private _rectangle: SkyRun.Common.Rectangle;

        constructor(position: SkyRun.Common.Point, rectangle: SkyRun.Common.Rectangle) {
            this._position = position;
            this._rectangle = rectangle;
        };

        public Draw(context: CanvasRenderingContext2D) {
            var left = this._position.X - this._rectangle.Width / 2;
            var top = this._position.Y - this._rectangle.Height / 2;

            context.fillStyle = "rgb(200,0,0)";
            context.fillRect(left, top, this._rectangle.Width, this._rectangle.Height);
        };
    }
}