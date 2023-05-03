import { write, db } from "./index.js";
import { postTemplate } from "./../post/index.js";
import { readComments } from "./CommentRepository.js";
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
    createdAt: Date.now()
  });
};

const readPagedQuestion = async () => {
  const q = query(collection(db, questions), orderBy("n", "desc"), limit(10));
  const querySnapshot = await getDocs(q);
  const list = [];
  querySnapshot.docs.forEach(e => list.push({
    id: e.id,
    ...e.data()
  }));

  return list;  
};

export const readPosts = async () => {
  let post = document.getElementById("post");
  post.innerHTML = "";

  const posts = await readPagedQuestion();

  for (let p of posts) {
    let comments = await readComments(p.id);
    p.comments = comments.docs.map((e) => e.data());
  }

  let content = "";

  for (let p of posts) {
    content += `${postTemplate(p)}\n`;
  }

  post.innerHTML = content;
};
