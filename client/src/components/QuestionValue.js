import React, { useEffect, useState } from "react";
import QuestionPage from "./Question";
import axios from "axios";
import { useParams } from "react-router-dom";
export const QuestionValue = () => {
  const [question, Setquestion] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://mapsmap.herokuapp.com/v1/api/question/?questionId=${id}`)
      .then((response) => {
        Setquestion(response.data);
      })
      .catch((err) => console.log("Error is --->", err));
  }, []);
  return <QuestionPage question={question} />;
};
