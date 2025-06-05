import { Outlet } from "react-router";
import NavigationBar from "../navigationBar";

export default function Layout() {
  return (
    <>
      <NavigationBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}