export const Update_UpVote = (id_question,id_answer) => ({
  type: "UPDATE_UPVOTE",
  payload: {id_question,id_answer},
});
export const Update_DownVote = (id_question,id_answer) => ({
    type: "UPDATE_DOWNVOTE",
    payload: {id_question,id_answer},
  });

