import "./App.css";
import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AskQuestion from "./components/AskQuestions";
import { TagPage } from "./components/TagPage";
import { QuestionValue } from "./components/QuestionValue";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
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
          <Route path="/tags/:tagId" element={<TagPage />} />
          <Route path="/question/:id" element={<QuestionValue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    );
  }
}

export default App;
