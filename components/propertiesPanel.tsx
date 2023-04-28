import interfaceStyles from "./interface.module.css";
import { Asset } from "../lib/types/assets";
import { Scene } from "../lib/types/scenes";
import { Selection } from "../lib/types/selection";

export default function PropertiesPanel({
  selection: selection,
}: {
  selection: Selection;
}) {
  let selectedScene: Scene | null = null;
  let selectedAsset: Asset | null = null;

  if (selection) {
    if (selection.scenes.length == 1 && selection.assets.length == 0) {
      selectedScene = selection.scenes[0];
    } else if (selection.scenes.length == 0 && selection.assets.length == 1) {
      selectedAsset = selection.assets[0];
    }
  }

  return (
    <div className={interfaceStyles.propertiesPanel}>
      <h3>Properties</h3>
      {selectedScene && <div>Here are some properties about your scene</div>}
      {selectedAsset && <div>Here are some properties about your scene</div>}
    </div>
  );
}
