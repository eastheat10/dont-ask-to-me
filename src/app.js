import {
  readPosts,
  writeQuestion,
  deleteQuestion,
} from "./firebase/PostRepository.js";
import { writeComment } from "./firebase/commentRepository.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

document.querySelector(".write").addEventListener("click", () => {
  writeQuestion(editor.getHTML(), localStorage.id);
});

const addLoadEvent = () => {
  const btn = document.getElementById("more-btn");
  if (btn !== null) {
    btn.addEventListener("click", () => readPosts(false));
  }
};

const deletePostEvent = () => {
  const btns = document.querySelectorAll(".delete-board");
  btns.forEach((r) => {
    r.addEventListener("click", (event) => {
      deleteQuestion(event.target.id);
      document.querySelector(`.question-${event.target.id}`).remove();
    });
  });
};

const fixHead = () => {
  let header = document.querySelector(".header");
  let headerHeight = header.offsetHeight;
  header.style.backgroundColor = "white";

  window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
      header.classList.add("drop");
    } else {
      header.classList.remove("drop");
    }
  };
};

const main = async () => {
  fixHead();
  const isFirst = true;
  await readPosts(isFirst);
  // replyClick();
  addLoadEvent();
  deletePostEvent();
  postComment();
};

main();

function postComment() {
  function textareaEvent(e) {
    const textarea = e.target;
    const arr = textarea.id.split("-");
    const postId =
      arr[2] + "-" + arr[3] + "-" + arr[4] + "-" + arr[5] + "-" + arr[6];
    const comment = textarea.value;
    textarea.value = "";

    writeComment(postId, comment);

    const ulId = `comment-list-${postId}`;
    const li = document.createElement("li");
    li.innerText = comment;
    document.getElementById(ulId).appendChild(li);
  }

  function buttonEvent(e) {
    const button = e.target;
    const arr = button.id.split("-");
    const postId =
      arr[2] + "-" + arr[3] + "-" + arr[4] + "-" + arr[5] + "-" + arr[6];

    const textareaId = `comment-area-${postId}`;
    const textarea = document.getElementById(textareaId);
    const comment = textarea.value;
    textarea.value = "";
    writeComment(postId, comment);

    const ulId = `comment-list-${postId}`;
    const li = document.createElement("li");
    li.innerText = comment;
    document.getElementById(ulId).appendChild(li);
  }

  const textarea = document.querySelectorAll(".comment-area");
  for (let i = 0; i < textarea.length; i++) {
    textarea[i].addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        textareaEvent(e);
      }
    });
  }

  const button = document.querySelectorAll(".comment-button");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", (e) => {
      buttonEvent(e);
    });
  }
}
