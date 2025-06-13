import { NavLink, useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import { clsx } from "clsx";
import { useState } from "react";
import DiamondIndicator from "../../components/diamondIndicator";

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
        <div style={{ position: "relative" }}>
          <DiamondIndicator />
          <div className="panel-header">
            <div className="bullet-point" style={{ marginLeft: "0.5em" }} />
            <h2>{title}</h2>
          </div>
        </div>
        <div className="panel" style={{ height: "61vh", paddingLeft: "0.5em" }}>
          {children}
        </div>
      </>
    )
  );
};

const Me = () => (
  <RightPanel title="Me">
    <p>
      I'm your typical dev doing mundane tasks on the job. There's not as much
      cool things to do when you're in corporate. So here I am coding something
      probably no one will see, but I'm doing it anyways because its fun and I
      get to learn something that is not Leetcode.
    </p>
  </RightPanel>
);

const ThisPage = () => (
  <RightPanel title="This Page">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>I want to recreate cool game screens.</p>
      <p>
        Currently this is NieR: Automata's title screen and pause screen.
        Eventually I want to recreate more. Like Persona's.
      </p>
      <p>Ultimately, my goal is to learn animations and GSAP.</p>
    </div>
  </RightPanel>
);

const TechStack = () => (
  <RightPanel title="Tech Stack">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>
        I started with Python and that has been my main language throughout my
        career. I've been finding myself preferring TypeScript for backends for
        web development. Running the same language for the back and front does
        make things easier.
      </p>
      <p>
        Scripting-wise, it just depends on what I'm trying to do. If its data
        analyzing, clearly its going to be Python Polars. If its scraping, then
        Node Playwright.
      </p>
      <p>
        React is my choice of frontend. Although I have been meaning to get into
        Svelte.
      </p>
      <p>
        My job uses GraphQl but honestly it adds more complexity for not a lot
        of benefits.
      </p>
    </div>
  </RightPanel>
);

const AmIaWeeb = () => (
  <RightPanel title="Am I a weeb">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>No I'm not. I just happen to have watched probably over 300 anime.</p>
      <p>And no I'm not learning Japanese because of anime.</p>
    </div>
  </RightPanel>
);

const HowThisWasMade = () => (
  <RightPanel title="How it's made">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>Landing page: @pixi/react</p>
      <p>
        Others: React with lots of css. No SSR since this page doesn't care for
        SEO.
      </p>
      <p>
        Got some css started by copying{" "}
        <a
          href="https://codepen.io/levise/pen/vMzEwr"
          style={{ display: "inline", padding: 0, fontWeight: 600 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          this codepen
        </a>
        . Thank you whoever wrote this.
      </p>
      <p>
        Don't bother checking my code because its a shithole. I did not intend
        it to be maintanable. I just coded something out quickly because I have
        other chores to do. I don't code like this at work I promise.
      </p>
    </div>
  </RightPanel>
);

const LeftPanel = () => {
  let { section } = useParams();
  const [activeSection, setActiveSection] = useState(section);
  const [leavingSection, setLeavingSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState("");
  const handleNavClick = (path: string) => {
    if (activeSection && activeSection !== path) {
      setLeavingSection(activeSection);
      // Clear leaving state after animation
      setTimeout(() => setLeavingSection(""), 600);
    }
    setActiveSection(path);
  };
  section = `/about_me/${section}`
  return (
    <nav
      className="panel panel-box-shadow"
      style={{ flex: "0 0 25%", height: "65vh" }}
    >
      <ul>
        {[
          createUrl("/about_me/me", "Me"),
          createUrl("/about_me/this_page", "This page"),
          createUrl("/about_me/tech_stack", "Tech Stack"),
          createUrl("/about_me/am_i_a_weeb", "Am I a weeb"),
          createUrl("/about_me/how_its_made", "How it's made"),
          createUrl("/about_me/contact", "Contact"),
        ].map((obj) => (
          <li
            key={obj.url}
            className={clsx(
              section === obj.url && "bullet-point-active",
              leavingSection === obj.url && "leaving",
            )}
            onMouseEnter={() => setHoveredSection(obj.url)}
            onMouseLeave={() => setHoveredSection("")}
          >
            <div>
              {section === obj.url && <DiamondIndicator active />}
              {hoveredSection === obj.url && <DiamondIndicator />}
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

const Contact = () => (
  <RightPanel title="Contact">
    <a
      href="mailto:pralphv321@gmail.com"
      style={{ fontWeight: 600 }}
      rel="noopener noreferrer"
    >
      pralphv321@gmail.com
    </a>
    <a
      href="https://www.linkedin.com/in/ralph-vincent-o-perez-16b378122"
      style={{ fontWeight: 600 }}
      target="_blank"
      rel="noopener noreferrer"
    >
      LinkedIn
    </a>
  </RightPanel>
);

const TITLE = "About Me";
const AboutMe = () => {
  const ready = useDelayIfRefresh(500);
  const { section } = useParams();
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1.5em", flexDirection: "column" }}>
          <NierPageHeader title={TITLE} />
          <div style={{ display: "flex", gap: "1em" }}>
            <div className="dividers" />
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              <LeftPanel />
              <div style={{ flex: "1" }}>
                {section === "me" && <Me />}
                {section === "this_page" && <ThisPage />}
                {section === "tech_stack" && <TechStack />}
                {section === "am_i_a_weeb" && <AmIaWeeb />}
                {section === "how_this_was_made" && <HowThisWasMade />}
                {section === "contact" && <Contact />}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default AboutMe;
