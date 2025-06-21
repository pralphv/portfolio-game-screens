import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth, useTranslation } from "../../utils/hooks";
import LeftPanel from "../../components/leftPanel";

const Projects = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();

  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && (
            <NierPageHeader title={t("projects")} />
          )}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={[]}
                  urlPrefix="hot_takes"
                />
              )}
              {section && <div style={{ flex: "1" }}></div>}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Projects;
