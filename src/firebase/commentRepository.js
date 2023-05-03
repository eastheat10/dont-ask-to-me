import { getCollectionsWith, write, update, deleteItem } from "./index.js";
import { where } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

const comments = "comments";

export default tmp = {
  writeComment: (postId, comment) => {
    const userId = user | "1234";
    write(comments, {
      userId,
      postId,
      comment,
      createdAt: Date.now(),
    });
  },

  readComments: (postId) => {
    getCollectionsWith(comments, where("postId", "==", postId));
  },

  updateComment: (commentId, comment) => {
    update(comments, commentId, comment);
  },

  deleteComment: (commentId) => {
    deleteItem(comments, commentId);
  }
};
