import { NavLink } from "react-router";
import "./index.css";

const NavigationBar = () => {
  return (
    <>
      <nav
        className="nier-navbar"
        style={{
          display: "flex",
          gap: "1rem",
          height: "8vh",
          alignItems: "center",
        }}
      >
        <NavLink to="/about_me">ABOUT ME</NavLink>
        <NavLink to="/experience">EXPERIENCE</NavLink>
        <NavLink to="/how_this_was_made">HOW THIS WAS MADE</NavLink>
      </nav>
      <div>
        <div>
          <div className="pattern top" />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <div>
          <div className="pattern bottom" />
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
