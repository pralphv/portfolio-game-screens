import { NavLink, useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { clsx } from "clsx";
import { useState } from "react";

function createUrl(url: string, name: string) {
  return {
    url,
    name,
  };
}

const RightPanel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const ready = useDelayIfRefresh(500);
  return (
    ready && (
      <>
        <div className="panel-header">
          <div className="bullet-point" style={{ marginLeft: "0.5em" }} />
          <h2>{title}</h2>
        </div>
        <div className="panel">{children}</div>
      </>
    )
  );
};

const LeftPanel = () => {
  const { section } = useParams();
  const [activeSection, setActiveSection] = useState(section);
  const [leavingSection, setLeavingSection] = useState("");

  const handleNavClick = (path: string) => {
    if (activeSection && activeSection !== path) {
      setLeavingSection(activeSection);
      // Clear leaving state after animation
      setTimeout(() => setLeavingSection(""), 600);
    }
    setActiveSection(path);
  };
  return (
    <nav
      className="panel panel-box-shadow"
      style={{ flex: "0 0 25%", height: "60vh" }}
    >
      <ul>
        {[
          createUrl("me", "Me"),
          createUrl("this_page", "This page"),
          createUrl("tech_stack", "Tech Stack"),
          createUrl("am_i_a_weeb", "Am I a weeb"),
          createUrl("how_this_was_made", "How this was made"),
        ].map((obj) => (
          <li
            key={obj.url}
            className={clsx(
              section === obj.url && "bullet-point-active",
              leavingSection === obj.url && "leaving",
            )}
          >
            <div>
              <div className={"bullet-point"} style={{ marginLeft: "0.5em" }} />
              <NavLink to={obj.url} onClick={() => handleNavClick(obj.url)}>
                {obj.name}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const TITLE = "About Me";
const AboutMe = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "2em", flexDirection: "column" }}>
          <NierPageHeader title={TITLE} />
          <div style={{ display: "flex", gap: "1em" }}>
            <div className="dividers" />
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              <LeftPanel />
              <div style={{ flex: "1" }}>
                {section === "me" && (
                  <RightPanel title="Me">
                    <div>me</div>
                  </RightPanel>
                )}
                {section === "this_page" && (
                  <RightPanel title="This page">
                    <div>this page</div>
                  </RightPanel>
                )}
                {section === "tech_stack" && (
                  <RightPanel title="Tech stack">
                    <div>tech stack</div>
                  </RightPanel>
                )}
                {section === "am_i_a_weeb" && (
                  <RightPanel title="Am I a weeb">
                    <div>am i a weeb</div>
                  </RightPanel>
                )}
                {section === "how_this_was_made" && (
                  <RightPanel title="How this was made">
                    <div>how this was made</div>
                  </RightPanel>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default AboutMe;
