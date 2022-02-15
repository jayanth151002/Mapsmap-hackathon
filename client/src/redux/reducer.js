import { Questions } from "../shared/Question";
export const Reducer = (state = Questions, action) => {
  switch (action.type) {
    case "UPDATE_UPVOTE": {
      let [TargetQuestion] = state.filter(
        (question) => action.payload.id_question == question.id
      );
      let [TargetAnswer] = TargetQuestion.answers.filter(
        (answer) => action.payload.id_answer == answer.id
      );
      TargetAnswer.VoteCount++;
      TargetAnswer.upvote = true;
      TargetQuestion = {
        ...TargetQuestion,
        answers: [...TargetQuestion.answers, TargetAnswer],
      };
      return [ ...state, TargetQuestion ];
    }
    case "UPDATE_DOWNVOTE": {
      let [TargetQuestion] = state.filter(
        (question) => action.payload.id_question == question.id
      );
      let [TargetAnswer] = TargetQuestion.answers.filter(
        (answer) => action.payload.id_answer == answer.id
      );
      TargetAnswer.VoteCount--;
      TargetAnswer.downvote = true;
      TargetQuestion = {
        ...TargetQuestion,
        answers: [...TargetQuestion.answers, TargetAnswer],
      };
      return [ ...state, TargetQuestion ];
    }
    default:
      return state;
  }
};
