import { Asset } from "./assets";
import { CanvasElement, CanvasElementOptions } from "./canvasElement";

export class Scene extends CanvasElement {
  assets: Asset[] = [];

  constructor(opts: CanvasElementOptions, assets: Asset[]) {
    opts.width = 160;
    opts.height = 90;
    super(opts);
    this.assets = assets;
  }
}
