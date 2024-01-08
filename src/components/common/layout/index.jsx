import { Outlet } from "react-router-dom";
import Header from "./Header"
import Test from "./Test";
// import Footer from "./Footer"

function Layout() {
  return (
    <div>
      <Header />
      <Test />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;
