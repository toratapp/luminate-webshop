import { Navbar, Menu } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";
import Logo from '/logo.svg';
import NavCart from "./NavCart";

function Nav() {
  return     <Navbar className="bg-base-100 mb-32 shadow-xl max-w-screen-2xl mx-auto mt-2">
              <div className="flex-1">
                <Link to="/">
                  <img src={Logo} className="logo p-0.5 ml-2" alt="Logo" />
                </Link>
              </div>
              <div className="flex-none mr-2">
                <Menu horizontal={true} className="px-1">
                  <Menu.Item>
                    <NavLink to="/contact">Contact</NavLink>
                  </Menu.Item>
                  <Menu.Item>
                    <NavCart />
                  </Menu.Item>
                </Menu>
              </div>
            </Navbar>;
}

export default Nav;
