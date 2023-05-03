import { write, db } from "./index.js";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
const questions = "questions";

export const writeQuestion = (content, author) => {
  write(questions, {
    content: content,
    author: author,
    createdAt: Date.now(),
  });
};

let lastTime = 9999999999999;

export const readPagedQuestion = async () => {
  const q = query(collection(db, questions), orderBy("n", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  const list = [];
  querySnapshot.docs.forEach((e) =>
    list.push({
      id: e.id,
      ...e.data(),
    })
  );

  return list;
};
