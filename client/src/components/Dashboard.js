import { useLocation, Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Dashboard = () => {
    const data = useLocation().state
    localStorage.setItem('token', data.data.data.token)
    const { id } = useParams()

    if (data)
        return (
            <div>
                <Navbar className="mb-3" style={{ backgroundColor: "#000" }}>
                    <NavbarBrand style={{ color: "#fff" }} className="mx-auto" href="/">
                        MAPSMAP
                    </NavbarBrand>
                </Navbar>
                Dashboard
                <div>
                    <button className="btn btn-primary">
                        <Link to={"/tags/" + id} style={{ color: "white", textDecoration: "none" }}>See Questions</Link>
                    </button>
                </div >
            </div >
        )
    else
        return (
            <div>
                <h2>Login first!!!!!!!</h2>
            </div>
        )
}

export default Dashboard;
