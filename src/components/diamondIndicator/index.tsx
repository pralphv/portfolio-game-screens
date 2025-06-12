import { clsx } from "clsx";

const DiamondIndicator = ({ active = false }: { active?: boolean }) => (
  <>
    <div
      className={clsx("diamond-indicator", active && "active")}
      style={{ left: "-1.5em" }}
    />
    <div className="diamond-dot" style={{ left: "-0.25em", top: "20%" }} />
    <div className="diamond-dot" style={{ left: "-0.25em", top: "80%" }} />
  </>
);

export default DiamondIndicator;
