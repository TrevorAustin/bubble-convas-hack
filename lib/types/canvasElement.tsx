export interface CanvasElementOptions {
  name: string;
  x?: number;
  y?: number;
  height?: number;
  width?: number;
  imageUri?: string;
  backgroundColor?: string;
}

export class CanvasElement {
  name: string;
  x: number;
  y: number;
  height: number;
  width: number;
  imageUri: string;
  backgroundColor: string;

  constructor(opts: CanvasElementOptions) {
    this.name = opts.name;
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.height = opts.height || 45;
    this.width = opts.width || 80;
    this.imageUri = opts.imageUri || "";
    this.backgroundColor = opts.backgroundColor || "#f0f0f0";
  }

  moveTo(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  trimLeft(x: number) {
    this.x += x;
    this.width -= x;
  }

  trimRight(x: number) {
    this.width -= x;
  }
}
