import { readPagedQuestion, writeQuestion } from "./firebase/PostRepository.js";
import { readComments, writeComment } from "./firebase/CommentRepository.js";
import { postTemplate } from "./post/index.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

const readPosts = async () => {
  const posts = await readPagedQuestion();

  for (let p of posts) {
    let comments = await readComments(p.id);
    p.comments = comments.docs.map((e) => e.data());
  }

  return posts;
};

const main = async () => {
  const posts = [];
  const items = await readPosts();

  for (let p of items) {
    posts.push(postTemplate(p));
  }

  const post = document.getElementById("post");
  console.log(posts);
  post.innerHTML(posts);
};

document.querySelector(".write").addEventListener("click", () => {
  console.log(editor.getHTML());
  writeQuestion(editor.getHTML(), localStorage.id);
});
console.log(writeQuestion);
