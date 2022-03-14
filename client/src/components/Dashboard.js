import { useLocation, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Dashboard = () => {
  const data = useLocation().state;

  localStorage.setItem("token", data.data.data.token);
  if (data) {
    return (
      <div>
        <Navbar className="mb-3" style={{ backgroundColor: "#000" }}>
          <NavbarBrand style={{ color: "#fff" }} className="mx-auto" href="/">
            MAPSMAP
          </NavbarBrand>
        </Navbar>
        <div className="mt-3">
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
