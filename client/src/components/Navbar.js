import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class NavbarMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: "#000" }}>
          <NavbarBrand href="/" style={{ color: "#fff" }}>
            MAPSMAP
          </NavbarBrand>

          <Nav navbar>
            <NavItem>
              <NavLink href="/login">
                <button className="btn btn-primary">Login</button>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}
