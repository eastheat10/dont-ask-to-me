import { readPosts, writeQuestion } from "./firebase/PostRepository.js";
import { readComments, writeComment } from "./firebase/CommentRepository.js";
import { postTemplate } from "./post/index.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

document.querySelector(".write").addEventListener("click", () => {
  console.log(editor.getHTML());
  writeQuestion(editor.getHTML(), localStorage.id);
});
console.log(writeQuestion);

const main = async () => {
  readPosts();
};
main();
