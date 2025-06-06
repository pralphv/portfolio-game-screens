import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutMe from "./routes/aboutMe";
import Experience from "./routes/experience";
import Home from "./routes/home";
import HowThisWasMade from "./routes/howThisWasMade";
import NavigationBar from "./components/navigationBar";
import Layout from "./components/layout";
import { Outlet } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <Home /> }, // index route for "/"
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/about_me", element: <AboutMe /> },
      { path: "/experience", element: <Experience /> },
      { path: "/how_this_was_made", element: <HowThisWasMade /> },
    ],
  },
]);

const Root = () => {
    useEffect(() => {
    // On component mount and theme change, update the data-theme attribute
    document.documentElement.setAttribute('data-theme', 'nier');
  }, []);
  return (
    <div className="">
      {/* @ts-ignore */}
      <RouterProvider router={router}>
        <NavigationBar />
      </RouterProvider>
    </div >
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
