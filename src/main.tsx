import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router";
import AboutMe from "./routes/aboutMe";
import Experience from "./routes/experience";
import Home from "./routes/home";
import HotTakes from "./routes/hotTakes";
import Layout from "./components/layout";
import Projects from "./routes/projects";

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
            <Route path="/experience/:section" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:section" element={<Projects />} />
            <Route path="/hot_takes" element={<HotTakes />} />
            <Route path="/hot_takes/:section" element={<HotTakes />} />
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
