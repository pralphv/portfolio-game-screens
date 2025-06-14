import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import RightPanel from "../../components/rightPanel";

const Microservices = () => (
  <RightPanel title="Microservices">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>Microservices is a lie.</p>
      <p>Microservices isn't for solving a scalability issue.</p>
      <p>
        It is for when the monolith grows too large, and teams step on each
        other's foot when deploying at the same time.
      </p>
      <p>
        But what ends up happening is services calling each other alongside the
        monolith, and create this distributed monolith monstrosity.
      </p>
      <p>Not saying a pure monolith is better.</p>
    </div>
  </RightPanel>
);
const Leetcode = () => (
  <RightPanel title="Microservices">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>fuck leetcode</p>
    </div>
  </RightPanel>
);

const GraphQl = () => (
  <RightPanel title="GraphQL">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>GraphQL is pretty neat when it works ngl.</p>
      <p>
        But then you have to find ways to avoid clients creating crazy queries.
      </p>
      <p>And not all developers know GraphQL.</p>
      <p>Then developers have to learn the company's query tree.</p>
      <p>
        And what if the company started with REST? Now some part of the code is
        REST, and some GraphQL. AKA politics.
      </p>
      <p>At this point, just use REST.</p>
    </div>
  </RightPanel>
);
const SystemDesign = () => (
  <RightPanel title="System Design">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>System design interviews are just as grindable as Leetcode.</p>
    </div>
  </RightPanel>
);

const HotTakes = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  const { isSmallScreen } = useScreenWidth();
  const subContent = [
    createUrl("/hot_takes/microservices", "Microservices"),
    createUrl("/hot_takes/graphql", "GraphQL"),
    createUrl("/hot_takes/leetcode", "Leetcode"),
    createUrl("/hot_takes/system_design", "System Design"),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && <NierPageHeader title="Hot Takes" />}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="hot_takes"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "microservices" && <Microservices />}
                  {section === "graphql" && <GraphQl />}
                  {section === "leetcode" && <Leetcode />}
                  {section === "system_design" && <SystemDesign/>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default HotTakes;
