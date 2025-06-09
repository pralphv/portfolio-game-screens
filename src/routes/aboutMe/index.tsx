import { NavLink } from "react-router";
import NierPageHeader from "../../components/nierPageHeader";

const TITLE = "About Me";
const AboutMe = () => {
  return (
    <div className="white-space">
      <div style={{ display: "flex", gap: "2em", flexDirection: "column" }}>
        <NierPageHeader title={TITLE} />
        <div style={{ display: "flex", gap: "1em" }}>
          <div className="dividers" />
          <nav className="panel">
            <ul>
              {["Me", "This page", "Tech Stack", "Am I a weeb"].map((text) => (
                <li key={text}>
                  <div>
                    <div className="bullet-point" />
                    <NavLink to={text}>{text}</NavLink>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
