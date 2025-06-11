import { useState } from "react";
import { NavLink } from "react-router";

import "./index.css";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [leavingLink, setLeavingLink] = useState("");

  const handleNavClick = (path: string) => {
    if (activeLink && activeLink !== path) {
      setLeavingLink(activeLink);
      // Clear leaving state after animation
      setTimeout(() => setLeavingLink(""), 600);
    }
    setActiveLink(path);
  };
  return (
    <>
      <div
        style={{ display: "flex", alignItems: "center", gap: "1em" }}
        className="white-space"
      >
        <div className="dividers" style={{ height: "2em" }} />
        <nav
          className="nier-navbar"
          style={{
            display: "flex",
            gap: "1rem",
            height: "8vh",
            alignItems: "center",
          }}
        >
          {["/about_me", "/experience", "/projects"].map((route) => (
            <NavLink
              to={route}
              key={route}
              className={({ isActive }) => {
                if (isActive) return "active";
                if (leavingLink === route) return "leaving";
              }}
              onClick={() => handleNavClick(route)}
            >
              {route.split("/")[1].split("_").join(" ")}
            </NavLink>
          ))}
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
