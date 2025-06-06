import { NavLink } from "react-router";
import "./index.css";

const NavigationBar = () => {
  return (
    <>
      <nav>
        <NavLink to="/about_me">About Me</NavLink>
        <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/how_this_was_made">How this was made</NavLink>
      </nav>
      <div
        style={{
          borderTop: "2px solid",
        }}
      >
        <div style={{ padding: "0 4rem" }}>
          <div className="pattern" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
