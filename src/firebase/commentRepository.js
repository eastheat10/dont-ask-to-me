import { getCollectionsWith, write, update, deleteItem } from "./index.js";
import { where } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const comments = "comments";

export const writeComment = (postId, comment) => {
  const userId =  "1234";
  write(comments, {
    userId,
    postId,
    comment,
    createdAt: Date.now(),
  });
};

export const readComments = (postId) => {
  return getCollectionsWith(comments, where("postId", "==", postId));
};

export const updateComment = (commentId, comment) => {
  update(comments, commentId, comment);
};

export const deleteComment = (commentId) => {
  deleteItem(comments, commentId);
};
