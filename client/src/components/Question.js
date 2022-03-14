import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Question = () => {

  const [question, setQuestion] = useState("");
  const [body, setBody] = useState("")
  const [vote, setVote] = useState("")
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://mapsmap.herokuapp.com/v1/api/question/?questionId=${id}`)
      .then((response) => {
        console.log(response.data.data)
        setQuestion(response.data.data.question.question);
        setBody(response.data.data.question.body)
        setVote(response.data.data.question.vote)
      })
      .catch((err) => console.log("Error is --->", err));
  }, []);

  if (question != "")
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-1">
            <div>
              <button>
                <i class="fa fa-arrow-up"></i>
              </button>
            </div>
            <div className="mx-2">{vote}</div>
            <div>
              <button>
                <i class="fa fa-arrow-down"></i>
              </button>
            </div>
          </div>
          <div className="h3 col-8 my-auto display-1">
            {question}
          </div>
        </div>
        <div className="mt-3">{body}</div>
        <div className="display-4 my-3">Suggestions</div>
        <div>
          {/* {question.question.data.question.comments.map((answer) => {
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
    )
  else return (
    <div></div>
  )
};

export default Question
