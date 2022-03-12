import React, { useEffect, useState } from "react";
import QuestionPage from "./Question";
import axios from "axios";
import { Questions } from "../shared/Question";
import { useParams } from "react-router-dom";
export const QuestionValue = () => {
  // const [question, Setquestion] = useState("");
  // const GetQuestion = () => {
  //   const { id } = useParams();
  //   console.log(id);
  //   axios
  //     .get(`https://mapsmap.herokuapp.com/v1/api/question/?questionId=${id}`)
  //     .then((response) => {
  //       Setquestion(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((err) => console.log("Error is --->", err));
  // };
  // useEffect(() => {
  //   GetQuestion();
  // });
  // console.log(question);
  return <QuestionPage question={Questions[0]} />;
};
