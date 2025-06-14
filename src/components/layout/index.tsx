import { Outlet } from "react-router";
import NavigationBar from "../navigationBar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
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
      <main>
        <Outlet />
      </main>
    </>
  );
}
