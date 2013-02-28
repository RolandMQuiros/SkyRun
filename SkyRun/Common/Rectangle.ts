module SkyRun.Common {
    export class Rectangle {
        private _top: number;
        private _left: number;
        private _width: number;
        private _height: number;

        constructor(left: number, top: number, width: number, height: number)
        {
            this._left = left;
            this._top = top;
            this._width = width;
            this._height = height;
        }

        public get Top(): number {
            return this._top;
        }

        public get Left(): number {
            return this._left;
        }

        public get Width(): number {
            return this._width;
        }

        public get Height(): number {
            return this._height;
        }
    }
}