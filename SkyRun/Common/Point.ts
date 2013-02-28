module SkyRun.Common {
    export class Point {
        private _x: number;
        private _y: number;

        constructor(x: number, y: number)
        {
            this._x = x;
            this._y = y;
        }

        public get X(): number {
            return this._x;
        }

        public get Y(): number {
            return this._y;
        }

        public set X(value) {
            this._x = value;
        }

        public set Y(value) {
            this._y = value;
        }
    }
}