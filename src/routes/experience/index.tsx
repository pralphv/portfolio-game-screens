import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { useScreenWidth } from "../../utils/hooks";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import RightPanel from "../../components/rightPanel";

const Yelp = () => (
  <RightPanel title="Yelp Inc.">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>React with SSR + Python backend services + GraphQL</p>
      <p>
        First job to actually need to have scale in mind. Although, not really.
        And the scaling is automated by infra teams.
      </p>
      <p>
        First job that actually needs SSR. Although it's more like writing code
        that doesn't break SSR or cause hydration issues. The actual server
        rendering is done by infra teams.
      </p>
    </div>
  </RightPanel>
);

const BofA = () => (
  <RightPanel title="Bank of America">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>
        Python. Lots of scripting to automate excel files. Thus, Pandas. As you
        would expect from mid/back office.
      </p>
      <p>
        My first real full-time developer gig. It was either this, or an infra
        developer in a hedge fund. Wonder if I chose wrong.
      </p>
    </div>
  </RightPanel>
);

const Segantii = () => (
  <RightPanel title="Segantii Capital Management">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>
        Hedge fund. I worked as a front office developer. Yes I was working from
        7 to 7 and still was the latest to come and earliest to leave.
      </p>
      <p>
        React CSR + Python monolith. The company had like 150 workers so scaling
        was not an issue. Didn't have to care about SEO so no SSR.
      </p>
      <p>
        One interesting thing was we used Redis quite heavily. For caching and
        Pub/Sub + websockets. It worked well.
      </p>
      <p>
        Funnily, other than SQL, we used MongoDB. Not that it really mattered.
      </p>
      <p>Lots of Pandas as you would expect.</p>
      <p>Closing down due to insider trading lmao.</p>
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
                  {section === "segantii" && <Segantii />}
                  {section === "bofa" && <BofA />}
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
