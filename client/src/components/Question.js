import React from "react";
const QuestionPage = (props) => {
  console.log(props.question);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-1">
          <div>
            <button>
              <i class="fa fa-arrow-up"></i>
            </button>
          </div>
          <div className="mx-2">{props.question.data.question.vote}</div>
          <div>
            <button>
              <i class="fa fa-arrow-down"></i>
            </button>
          </div>
        </div>
        <div className="h3 col-8 my-auto display-1">
          {props.question.data.question.question}
        </div>
      </div>
      <div className="mt-3">{props.question.data.question.body}</div>
      <div className="display-4 my-3">Suggestions</div>
      <div>
        {/* {props.question.data.question.comments.map((answer) => {
          return (
            <div className="mt-2">
              <div className="row">
                <div className="col-1">
                  <div>
                    <button>
                      <i class="fa fa-arrow-up"></i>
                    </button>
                  </div>
                  <div className="mx-2"></div>
                  <div>
                    <button>
                      <i class="fa fa-arrow-down"></i>
                    </button>
                  </div>
                </div>
                <div className="h3 col-8 my-auto"></div>
              </div>
              <div className="row">
                <div className="my-1"></div>
              </div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
export default QuestionPage;
