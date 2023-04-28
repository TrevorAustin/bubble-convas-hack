import { WorkspaceInterface } from "../lib/types/workspace";

export function hackReducer(
  workspace: WorkspaceInterface,
  action: any
): WorkspaceInterface {
  switch (action.type) {
    case "select":
      if (action.targetType == "scene") {
        return {
          ...workspace,
          selected: {
            scenes: [action.elem],
            assets: [],
          },
        };
      } else if (action.targetType == "asset") {
        return {
          ...workspace,
          selected: {
            scenes: [],
            assets: [action.elem],
          },
        };
      }
      break;
    case "drag":
      return workspace;
      break;
  }
  return workspace;
}
