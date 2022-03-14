import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password1 === "" || password2 === "" || name === "")
      alert("Enter Proper Credentials!!!");
    else if (password1 != password2) alert("Passwords don't match");
    else {
      axios
        .post("https://mapsmap.herokuapp.com/v1/api/user/signup", {
          name: name,
          email: email,
          password: password1,
          confirm_password: password2,
        })
        .then((res) => {
          navigate("/dashboard", { state: res.data });
        })
        .catch((res) => console.log(res));
    }
  };

  return (
    <div className="container">
      <h3>Sign Up</h3>
      <form>
        <div className="m-3">
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
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
            onChange={(e) => setPassword1(e.target.value)}
          ></input>
        </div>
        <div className="m-3">
          <input
            type="password"
            placeholder="Confirm Password"
            className="form-control"
            required
            onChange={(e) => setPassword2(e.target.value)}
          ></input>
        </div>
        <div>
          <button className="btn btn-primary" onClick={handleLogin}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
