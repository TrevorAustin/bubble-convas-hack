import interfaceStyles from "./interface.module.css";
import CSS from "csstype";
import { Asset } from "../lib/types/assets";
import { Scene } from "../lib/types/scenes";
import React, { Component, MouseEventHandler, ReactElement } from "react";

function CanvasAsset(asset: Asset, elementSelectHandler: Function) {
  const assetStyle: CSS.Properties = {
    backgroundColor: asset.backgroundColor,
    position: "absolute",
    top: `${asset.y}px`,
    left: `${asset.x}px`,
    width: `${asset.width}px`,
    height: `${asset.height}px`,
  };

  return (
    <div
      className={interfaceStyles.canvasAsset}
      style={assetStyle}
      draggable="true"
      onClick={(e) => elementSelectHandler(asset, "asset")}
    ></div>
  );
}

function CanvasScene(scene: Scene, elementSelectHandler: Function) {
  const sceneStyle: CSS.Properties = {
    position: "absolute",
    top: `${scene.y}px`,
    left: `${scene.x}px`,
    width: `${scene.width}px`,
    height: `${scene.height}px`,
  };

  return (
    <div
      className={interfaceStyles.canvasScene}
      style={sceneStyle}
      draggable="true"
      onClick={(e) => elementSelectHandler(scene, "scene")}
    >
      <h4>{scene.name}</h4>
      {scene.assets.map((asset: Asset) =>
        CanvasAsset(asset, elementSelectHandler)
      )}
    </div>
  );
}

export function Canvas({
  assets,
  scenes,
  elementSelectHandler,
}: {
  assets: Asset[];
  scenes: Scene[];
  elementSelectHandler: Function;
}) {
  return (
    <div className={interfaceStyles.canvas}>
      {scenes.map((scene) => CanvasScene(scene, elementSelectHandler))}
      {assets.map((asset) => CanvasAsset(asset, elementSelectHandler))}
    </div>
  );
}
