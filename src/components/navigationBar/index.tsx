import { NavLink } from "react-router";
import "./index.css";

const NavigationBar = () => {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="dividers" />
        <nav
          className="nier-navbar"
          style={{
            display: "flex",
            gap: "1rem",
            height: "8vh",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/about_me"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ABOUT ME
          </NavLink>
          <NavLink to="/experience">EXPERIENCE</NavLink>
          <NavLink to="/how_this_was_made">HOW THIS WAS MADE</NavLink>
        </nav>
      </div>

      <div className="pattern top" />
      <div
        className="pattern bottom"
        style={{
          position: "fixed",
          bottom: "2em",
          left: 0,
          right: 0,
        }}
      />
    </>
  );
};

export default NavigationBar;
