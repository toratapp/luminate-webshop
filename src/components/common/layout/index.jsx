import { Outlet } from "react-router-dom";
import Header from "./Header"
import FooterLayout from "./FooterLayout";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <FooterLayout />
    </div>
  );
}

export default Layout;
