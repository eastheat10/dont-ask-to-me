import { readPosts, writeQuestion } from "./firebase/PostRepository.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

document.querySelector(".write").addEventListener("click", () => {
  console.log(editor.getHTML());
  writeQuestion(editor.getHTML(), localStorage.id);
});

const addLoadEvent = () => {
   const btn = document.getElementById("more-btn");
   btn.addEventListener("click", () => readPosts(false));
}

const main = async () => {
   const isFirst = true;
   readPosts(isFirst);
   addLoadEvent();
};

main();
