import { write, db } from "./index.js";
import { postTemplate } from "./../post/index.js";
import { readComments } from "./CommentRepository.js";
import {
  query,
  where,
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

let lastDate = 9999999999999;

const readPagedQuestion = async () => {
  const q = query(collection(db, questions), orderBy("createdAt", "desc"), limit(10));
  const list = await read(q);
  return list;
};

/**
 * 더보기 버튼 눌렀을 때 실행되는 메서드
 * @returns array
 */
const readNextQuestion = async () => {
  const q = query(
    collection(db, questions),
    where("createdAt", "<", lastDate),
    orderBy("createdAt", "desc"),
    limit(10)
  );
  const list = await read(q);
  return list;
};

const read = async (query) => {
  const querySnapshot = await getDocs(query);
  const list = [];
  querySnapshot.docs.forEach((e) =>
    list.push({
      id: e.id,
      ...e.data(),
    })
  );

  lastDate = list[list.length - 1].createdAt;
  return list;
};

export const readPosts = async (isFirst) => {
  let post = document.getElementById("post");
  if (isFirst) {
    post.innerHTML = "";
  }

  const posts = isFirst ? await readPagedQuestion() : await readNextQuestion();
  checkLast(posts);

  for (let p of posts) {
    let comments = await readComments(p.id);
    p.comments = comments.docs.map((e) => e.data());
  }

  let content = "";

  for (let p of posts) {
    content += `${postTemplate(p)}\n`;
  }

  post.innerHTML += content;
};

/**
 * 10개씩 요청하지만 응답받은 컨텐츠가 10개 미만일 시 마지막 페이지 이므로 더보기 버튼 삭제
 * 
 * @param {array} posts 
 */
const checkLast = (posts) => {
  if (posts.length < 10) {
    const btn = document.getElementById("more-btn");
    btn.remove();
  }
}
