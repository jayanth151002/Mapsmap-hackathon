import "./App.css";
import React, { Component } from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AskQuestion from "./components/AskQuestions";
import { QuestionValue } from "./components/QuestionValue";
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
          <Route path="/question/:id" element={<QuestionValue />} />
        </Routes>
      </div>
    );
  }
}

export default App;
