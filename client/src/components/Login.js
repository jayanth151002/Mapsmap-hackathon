import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") alert("Enter Proper Credentials!!!");
    else {
      axios
        .post("https://mapsmap.herokuapp.com/v1/api/user/signin", {
          email: email,
          password: password,
        })
        .then((res) => {
          navigate("/dashboard", { state: { data: res.data } });
          console.log(res.data);
        })
        .catch((res) => console.log("err"));
    }
  };

  return (
    <div>
      <Navbar className="mb-3" style={{ backgroundColor: "#000" }}>
        <NavbarBrand style={{ color: "#fff" }} className="mx-auto" href="/">
          MAPSMAP
        </NavbarBrand>
      </Navbar>
      <div className="container">
        <h3>Login</h3>
        <form>
          <div className="m-3">
            <input
              type="email"
              placeholder="Email ID"
              className="form-control"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="m-3">
            <input
              type="password"
              placeholder="Password"
              className="form-control"
              required
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button className="btn btn-primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
        <div className="m-3">
          Don't have an account? Click here to{" "}
          <Link to="/signup">create an account</Link>.
        </div>
      </div>
    </div>
  );
};

export default Login;
