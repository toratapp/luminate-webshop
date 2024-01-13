import { Outlet } from "react-router-dom";
import Header from "./Header"
import FooterLayout from "./FooterLayout";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default Layout;
