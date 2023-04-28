import interfaceStyles from "./interface.module.css";

import Workspace from "../components/workspace";
import AssetsPanel from "../components/assetsPanel";
import { Canvas } from "../components/canvas";
import Timeline from "../components/timeline";
import PropertiesPanel from "../components/propertiesPanel";

import { Asset } from "../lib/types/assets";
import { Scene } from "../lib/types/scenes";
import { Selection } from "../lib/types/selection";
import React, { ReactNode, useReducer } from "react";
import { hackReducer } from "../lib/hackReducer";
import { CanvasElement } from "../lib/types/canvasElement";

const initialWorkspace: {
  scenes: Scene[];
  assets: Asset[];
  selected: Selection;
} = {
  scenes: [
    new Scene({ name: "My Cool Scene", y: 60 }, [
      new Asset({
        name: "Clip 1",
        x: 10,
        y: 10,
        backgroundColor: "palegreen",
      }),
      new Asset({
        name: "Clip 2",
        x: 90,
        y: 10,
        backgroundColor: "paleturquoise",
      }),
    ]),
  ],
  assets: [
    new Asset({
      name: "Clip 3",
      x: 10,
      y: 10,
      backgroundColor: "pink",
    }),
  ],
  selected: { scenes: [], assets: [] },
};

export default function Interface() {
  const [workspace, dispatch]: [workspace: any, dispatch: any] =
    React.useReducer(hackReducer, initialWorkspace);
  const selectedScenes = workspace.selected.scenes;
  const selectedAssets = workspace.selected.assets;

  function handleSelectScene(scene: Scene) {
    dispatch({
      type: "select",
      targetType: "scene",
      scene: scene,
    });
  }

  function handleSelectElement(elem: CanvasElement, targetType: string) {
    dispatch({
      type: "select",
      targetType: targetType,
      elem: elem,
    });
  }

  function handleDragEvent(e: Event) {
    console.log(e);
    dispatch({ type: "drag" });
  }

  return (
    <div className={interfaceStyles.interface}>
      <AssetsPanel assets={workspace.assets}></AssetsPanel>
      <Workspace>
        <Canvas
          scenes={workspace.scenes}
          assets={workspace.assets}
          elementSelectHandler={(elem: CanvasElement, targetType: string) => {
            console.log(elem);
            handleSelectElement(elem, targetType);
          }}
        ></Canvas>
        {selectedScenes.length == 1 && (
          <Timeline scene={selectedScenes[0]}></Timeline>
        )}
      </Workspace>
      <PropertiesPanel selection={workspace.selected}></PropertiesPanel>
    </div>
  );
}
