import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AskQuestion from "./components/AskQuestions";
import Question from "./components/Question";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import Tags from "./components/Tags";
import NavbarMap from "./components/Navbar";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/askquestion" element={<AskQuestion />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tag/:tagId" element={<Tags />} />
        </Routes>
      </div>
    );
  }
}

export default App;
