import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router";
import AboutMe from "./routes/aboutMe";
import Experience from "./routes/experience";
import Home from "./routes/home";
import HowThisWasMade from "./routes/howThisWasMade";
import Layout from "./components/layout";

const Root = () => {
  useEffect(() => {
    // On component mount and theme change, update the data-theme attribute
    document.documentElement.setAttribute("data-theme", "nier");
  }, []);
  return (
    <div className="">
      <HashRouter>
        <Routes>
          {/* Home route without layout */}
          <Route path="/" element={<Home />} />

          {/* Routes with layout */}
          <Route element={<Layout />}>
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/about_me/:section" element={<AboutMe />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/how_this_was_made" element={<HowThisWasMade />} />
            <Route path="/projects" element={<HowThisWasMade />} />
            <Route path="/thoughts" element={<HowThisWasMade />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
