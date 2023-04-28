import CSS from "csstype";
import interfaceStyles from "./interface.module.css";
import { Asset } from "../lib/types/assets";
import { Scene } from "../lib/types/scenes";

function TimelineAsset(asset: Asset) {
  const assetStyle: CSS.Properties = {
    backgroundColor: asset.backgroundColor,
    position: "absolute",
    top: `${asset.y}px`,
    left: `${asset.x}px`,
    width: `${asset.width}px`,
    height: `${asset.height}px`,
  };

  return (
    <div className="timelineAsset" style={assetStyle}>
      {asset.name}
    </div>
  );
}

export default function Timeline({ scene: scene }: { scene: Scene }) {
  return (
    <div className={interfaceStyles.timeline}>
      <h3>{scene.name}</h3>
      {scene.assets.map((asset: Asset) => TimelineAsset(asset))}
    </div>
  );
}
