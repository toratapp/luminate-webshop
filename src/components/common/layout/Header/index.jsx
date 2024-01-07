import { Navbar, Menu } from "react-daisyui";
import { Link, NavLink } from "react-router-dom";
import Logo from '/logo.svg';

function Nav() {
  return     <Navbar>
              <div className="flex-1">
                <Link to="/">
                  <img src={Logo} alt="Logo" />;
                </Link>
              </div>
              <div className="flex-none">
                <Menu horizontal={true} className="px-1">
                  <Menu.Item>
                    <NavLink to="/contact">Contact</NavLink>
                  </Menu.Item>
                </Menu>
              </div>
            </Navbar>;
}

export default Nav;
