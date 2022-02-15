import React from "react";

const QuestionPage = (props) => {
  return (
    <div className="container mt-3">
      <div className="display-1">{props.question.qnTitle}</div>
      <div className="mt-3">{props.question.qnDescription}</div>
      <div className="display-4 my-3">Suggestions</div>
      <div>
        {props.question.answers.map((answer) => {
          return (
            <div className="mt-2">
              <div className="row">
                <div className="col-1">
                  <div>
                    <button
                      onClick={() => {
                        props.Update_UpVote(props.question.id, answer.id);
                      }}
                    >
                      <i class="fa fa-arrow-up"></i>
                    </button>
                  </div>
                  <div className="mx-2">{answer.VoteCount}</div>
                  <div>
                    <button
                      onClick={() => {
                        props.Update_DownVote(props.question.id, answer.id);
                      }}
                    >
                      <i class="fa fa-arrow-down"></i>
                    </button>
                  </div>
                </div>
                <div className="h3 col-8 my-auto">{answer.ansTitle}</div>
              </div>
              <div className="row">
                <div className="my-1">{answer.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default QuestionPage;
