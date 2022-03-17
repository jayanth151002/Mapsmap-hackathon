import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Routes, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import AskQuestion from "./components/AskQuestions";
import QuestionPage from "./components/Question";
import { Update_UpVote } from "./redux/ActionCreator";
import { Update_DownVote } from "./redux/ActionCreator";
import define from "./map";
import { Runtime, Library, Inspector } from "./runtime.js";
const mapStateToProp = (state) => ({
  Questions: state,
});

const mapDispatchToProps = (dispatch) => ({
  Update_UpVote: (id_question, id_answer) =>
    dispatch(Update_UpVote(id_question, id_answer)),
  Update_DownVote: (id_question, id_answer) =>
    dispatch(Update_DownVote(id_question, id_answer)),
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const runtime = new Runtime();
    const main = runtime.module(define, Inspector.into(document.body));
    const QuestionValue = () => {
      const { id } = useParams();
      const [question] = this.props.Questions.filter(
        (question) => question.id === parseInt(id)
      );
      return (
        <QuestionPage
          Update_UpVote={this.props.Update_UpVote}
          Update_DownVote={this.props.Update_DownVote}
          question={question}
        />
      );
    };
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

export default connect(mapStateToProp, mapDispatchToProps)(App);
