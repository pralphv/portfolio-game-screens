import { useDelayIfRefresh } from "../../utils/hooks";
import DiamondIndicator from "../../components/diamondIndicator";
import { useScreenWidth } from "../../utils/hooks";

const RightPanel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const { isSmallScreen } = useScreenWidth();
  const ready = useDelayIfRefresh(500);
  return (
    ready && (
      <>
        <div
          style={{ position: "relative", marginTop: isSmallScreen ? "1em" : 0 }}
        >
          <DiamondIndicator />
          <div className="panel-header">
            <div className="bullet-point" style={{ marginLeft: "0.5em" }} />
            <h2>{title}</h2>
          </div>
        </div>
        <div
          className="panel"
          style={{
            height: isSmallScreen ? "65vh" : "61vh",
            paddingLeft: "0.5em",
          }}
        >
          {children}
        </div>
      </>
    )
  );
};

export default RightPanel;
