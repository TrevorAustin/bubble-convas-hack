import interfaceStyles from "./interface.module.css";
import { Asset } from "../lib/types/assets";

export default function AssetsPanel({ assets: a }: { assets: Asset[] }) {
  return (
    <div className={interfaceStyles.assetsPanel}>
      <h3>Assets</h3>
      <ul>
        {a.map((asset, i) => (
          <li id={"assetPanelItem" + i}>{asset.name}</li>
        ))}
      </ul>
    </div>
  );
}
