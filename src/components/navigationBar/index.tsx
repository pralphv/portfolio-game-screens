import { useState } from "react";
import { NavLink } from "react-router";
import DiamondIndicator from "../../components/diamondIndicator";
import { useScreenWidth, useTranslation } from "../../utils/hooks";
import { clsx } from "clsx";

import "./index.css";

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [leavingLink, setLeavingLink] = useState("");
  const [hoveringItem, setHoveringItem] = useState("");
  const { isSmallScreen } = useScreenWidth();
  const { t } = useTranslation();
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
        className={clsx(!isSmallScreen, "white-space")}
      >
        {!isSmallScreen && (
          <div className="dividers" style={{ height: "2em" }} />
        )}
        <nav
          className="nier-navbar"
          style={{
            overflowX: isSmallScreen ? "scroll" : undefined,
            overflowY: "hidden",
            whiteSpace: "nowrap",
            display: "flex",
            gap: "1rem",
            height: "8vh",
            alignItems: "center",
            marginLeft: "-2em", // Compensate for diamond space
            paddingLeft: "2em", // Keep the padding
          }}
        >
          {[
            { route: "/about_me", display: t("aboutMe") },
            { route: "/experience", display: t("experience") },
            { route: "/hot_takes", display: t("hotTakes") },
            { route: "/projects", display: t("projects") },
            { route: "/settings", display: t("settings") },
          ].map((obj) => (
            <div
              key={obj.route}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                to={obj.route}
                className={({ isActive }) => {
                  if (isActive) return "active";
                  if (leavingLink === obj.route) return "leaving";
                }}
                onClick={() => handleNavClick(obj.route)}
                onMouseEnter={() => setHoveringItem(obj.route)}
                onMouseLeave={() => setHoveringItem("")}
              >
                {({ isActive }) => {
                  return (
                    <>
                      {isActive && <DiamondIndicator active={isActive} />}
                      {hoveringItem === obj.route && <DiamondIndicator />}
                      {obj.display}
                    </>
                  );
                }}
              </NavLink>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
