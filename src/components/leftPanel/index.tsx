import { NavLink, useParams } from "react-router";
import { clsx } from "clsx";
import { useState } from "react";
import DiamondIndicator from "../../components/diamondIndicator";


interface SubContent {
  url: string;
  name: string;
}

export function createUrl(url: string, name: string): SubContent {
  return {
    url,
    name,
  };
}



const LeftPanel = ({
  smallScreen = false,
  subContent,
  urlPrefix
}: {
  smallScreen: boolean;
  subContent: SubContent[];
  urlPrefix: string
}) => {
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
  section = `/${urlPrefix}/${section}`;
  return (
    <nav
      className="panel panel-box-shadow"
      style={{ flex: smallScreen ? "1" : "0 0 25%", height: "65vh" }}
    >
      <ul>
        {subContent.map((obj) => (
          <li
            key={obj.url}
            className={clsx(
              section === obj.url && "bullet-point-active",
              leavingSection === obj.url && "leaving"
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

export default LeftPanel