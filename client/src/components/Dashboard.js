import { useLocation, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Dashboard = () => {
  const data = useLocation().state;

  if (data) {
    console.log(data.data.data);
    localStorage.setItem("token", data.data.data.token);
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
        <div>
          Dashboard
          <div className="mt-3">
            <button className="btn btn-primary">
              <Link
                to="/tag/622f59196cd075ed2d5da424"
                style={{ color: "white", textDecoration: "none" }}
              >
                Ask Question
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h2>Login first!!!!!!!</h2>
      </div>
    );
};

export default Dashboard;
