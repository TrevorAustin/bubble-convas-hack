import interfaceStyles from "./interface.module.css";

export default function Workspace({ children }: { children: React.ReactNode }) {
  return <div className={interfaceStyles.workspace}>{children}</div>;
}
