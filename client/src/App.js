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
import define from "./map"
import { Runtime, Library, Inspector } from "./runtime.js";

import NavbarMap from "./components/Navbar";
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(document.body));
    return (
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/askquestion" element={<AskQuestion />} />
          <Route path="/question/:id" element={<Question />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tags/:tagId' element={<Tags />} />
        </Routes>
      </div>
    );
  }
}

export default App;
