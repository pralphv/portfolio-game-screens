import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import RightPanel from "../../components/rightPanel";

const Yelp = () => (
  <RightPanel title="Me">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>I'm your typical dev doing mundane tasks on the job.</p>
      <p>
        There's not as much cool things to do when you're in corporate. So here
        I am coding something probably no one will see, but I'm doing it anyways
        because its fun and I get to learn something that is not Leetcode.
      </p>
    </div>
  </RightPanel>
);

const Experience = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const subContent = [
    createUrl("/experience/yelp", "Yelp"),
    createUrl("/experience/segantii", "Segantii"),
    createUrl("/experience/bofa", "BofA"),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && <NierPageHeader title="Experience" />}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="experience"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "yelp" && <Yelp />}
                  {section === "segantii" && <Yelp />}
                  {section === "bofa" && <Yelp />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Experience;
