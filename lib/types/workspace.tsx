import { Asset } from "./assets";
import { Scene } from "./scenes";
import { Selection } from "./selection";

export interface WorkspaceInterface {
  scenes: Scene[];
  assets: Asset[];
  selected: Selection;
}
