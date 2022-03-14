import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const Question = () => {
  const [question, setQuestion] = useState("");
  const [body, setBody] = useState("");
  const [vote, setVote] = useState("");
  const [qn_id, setQnid] = useState("");
  const [newcomm, setnewcomm] = useState("");
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://mapsmap.herokuapp.com/v1/api/question/?questionId=${id}`)
      .then((response) => {
        console.log(response.data.data);
        setQuestion(response.data.data.question.question);
        setBody(response.data.data.question.body);
        setVote(response.data.data.question.vote);
        setQnid(response.data.data.question._id);
        console.log(response.data.data.question.comments);
        return response.data.data.question.comments;
      })
      .then((comm) => {
        comm.map(async (id) => {
          await axios
            .get(
              `https://mapsmap.herokuapp.com/v1/api/comment/getcommentById?comment_id=${id._id}`
            )
            .then((res) => res.data.data.comment)
            .then((comment) => setData(comment));
        });
      })
      .catch((err) => console.log("Error is --->", err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://mapsmap.herokuapp.com/v1/api/comment/addcomment",
        { question_id: qn_id, content: newcomm },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const Commcards = () => {
    console.log(data);
    return data.map((comm, n) => {
      console.log(comm);
      return (
        <div className="card mb-3 mt-3" key={n}>
          <div className="card-head">{comm.comment}</div>
        </div>
      );
    });
  };

  if (question != "") {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-1">
            <div>
              <button
                className="btn btn-success"
                onClick={() => {
                  axios
                    .post(
                      `https://mapsmap.herokuapp.com/v1/api/vote/upvote?question_id=${qn_id}`,
                      {},
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                          "Content-Type": "application/json",
                        },
                      }
                    )
                    .then((res) => console.log(res));
                }}
              >
                <i class="fa fa-arrow-up"></i>
              </button>
            </div>
            <div className="text-center mt-1 mb-1">{vote}</div>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  axios
                    .post(
                      `https://mapsmap.herokuapp.com/v1/api/vote/downvote?question_id=${qn_id}`,
                      {},
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                          "Content-Type": "application/json",
                        },
                      }
                    )
                    .then((res) => console.log(res));
                }}
              >
                <i class="fa fa-arrow-down"></i>
              </button>
            </div>
            <div className="h3 col-8 my-auto display-1">{question}</div>
          </div>
          <div className="h3 col-8 my-auto display-1">{question}</div>
        </div>
        <div className="mt-3">{body}</div>
        <div className="display-4 my-3">Comments</div>
        <div>
          <div>{data.length > 0 ? <Commcards /> : null}</div>
          <div>
            <h5>Add Comment</h5>
            <div className="m-3">
              <input
                type="text"
                placeholder="New Comment"
                className="form-control"
                required
                onChange={(e) => setnewcomm(e.target.value)}
              ></input>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Post Comment
            </button>
          </div>

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
    );
  } else return <div></div>;
};

export default Question;
