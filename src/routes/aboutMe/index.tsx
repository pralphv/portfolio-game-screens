import { useParams } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";
import { useDelayIfRefresh } from "../../utils/hooks";
import RightPanel from "../../components/rightPanel";
import LeftPanel, { createUrl } from "../../components/leftPanel";
import { useScreenWidth } from "../../utils/hooks";

const Me = () => (
  <RightPanel title="Me">
    <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
      <p>I'm your typical dev doing mundane tasks on the job.</p>
      <p>
        There's not as much cool things to do when you're in corporate. So here
        I am coding something probably no one will see, but I'm doing it anyways
        because its fun and I get to learn something that is not Leetcode.
      </p>
      <p>
        Sadly self-taught. Graduated with an accounting & finance major. I have
        this random ass CFA level 1.
      </p>
      <p>Probably will stay full-stack for the rest of my life.</p>
    </div>
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
  const { isSmallScreen } = useScreenWidth();
  const subContent = [
    createUrl("/about_me/me", "Me"),
    createUrl("/about_me/this_page", "This page"),
    createUrl("/about_me/tech_stack", "Tech Stack"),
    createUrl("/about_me/am_i_a_weeb", "Am I a weeb"),
    createUrl("/about_me/how_its_made", "How it's made"),
    createUrl("/about_me/contact", "Contact"),
  ];
  return (
    ready && (
      <div className="white-space">
        <div style={{ display: "flex", gap: "1em", flexDirection: "column" }}>
          {!(isSmallScreen && section) && <NierPageHeader title={TITLE} />}
          <div style={{ display: "flex", gap: "1em" }}>
            {!(isSmallScreen && section) && <div className="dividers" />}
            <div style={{ display: "flex", gap: "2em", flex: "1" }}>
              {(!isSmallScreen || !section) && (
                <LeftPanel
                  smallScreen={isSmallScreen}
                  subContent={subContent}
                  urlPrefix="about_me"
                />
              )}
              {section && (
                <div style={{ flex: "1" }}>
                  {section === "me" && <Me />}
                  {section === "this_page" && <ThisPage />}
                  {section === "tech_stack" && <TechStack />}
                  {section === "am_i_a_weeb" && <AmIaWeeb />}
                  {section === "how_its_made" && <HowThisWasMade />}
                  {section === "contact" && <Contact />}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default AboutMe;
