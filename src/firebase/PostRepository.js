import { write, db } from "./index.js";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
const questions = "questions";

export const writeQuestion = (i) => {
  write(questions, {
    content: "내용",
    author: "홍길동",
    createdAt: Date.now(),
    n: i
  });
};

let lastTime = 9999999999999;

export const readPagedQuestion = async () => {
  const questionsRef = collection(db, questions);
  const q = query(questionsRef, orderBy("n", "desc"), limit(20));
  const querySnapshot = await getDocs(q);
  const list = [];
  querySnapshot.docs.forEach(e => console.log(e.data()));
  console.log("=====");
  querySnapshot.docs.forEach(e => {
    list.push(e.data());
  })

  lastTime = list[list.length - 1].createdAt;

  console.log(JSON.stringify(list, null, 3));
    
};
