import { writeComment } from "./firebase/CommentRepository.js";
import { readPosts, writeQuestion } from "./firebase/PostRepository.js";

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

function replyClick() {
  document.querySelectorAll(".reply").forEach((r) => {
    r.addEventListener("click", (event) => {
      writeComment(localStorage.getItem("id"), event.target.id, "test");
    });
  });
}

const fixHead = () => {
  let header = document.querySelector(".header");
  let headerHeight = header.offsetHeight;
  header.style.backgroundColor = "white";

  window.onscroll = function () {
    let windowTop = window.scrollY;
    // 스크롤 세로값이 헤더높이보다 크거나 같으면
    // 헤더에 클래스 'drop'을 추가한다
    if (windowTop >= headerHeight) {
      header.classList.add("drop");
    }
    // 아니면 클래스 'drop'을 제거
    else {
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
  postComment();
};

main();
/*
const textarea = document.getElementById("comment-area-1234");
  textarea.addEventListener("keydown", (e) => {
    console.log(e.target.id);
  });

  */

function postComment() {
  function textareaEvent(e) {
    const textarea = e.target;
    const arr = textarea.id.split("-");
    const postId =
      arr[2] + "-" + arr[3] + "-" + arr[4] + "-" + arr[5] + "-" + arr[6];
    const comment = textarea.value;

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
    const comment = document.getElementById(textareaId).value;
    writeComment(postId, comment);

    const ulId = `comment-list-${postId}`;
    const li = document.createElement("li");
    li.innerText = comment;
    document.getElementById(ulId).appendChild(li);
  }

  const textarea = document.querySelectorAll(".comment-area");
  console.log(textarea);
  for (let i = 0; i < textarea.length; i++) {
    // console.log(textarea[i]);
    textarea[i].addEventListener("keyup", (e) => {
      if (e.keyCode === 13) {
        textareaEvent(e);
      }
    });
  }

  const button = document.querySelectorAll(".comment-button");
  for (let i = 0; i < button.length; i++) {
    console.log(i);
    button[i].addEventListener("click", (e) => {
      console.log("button cliked");
      buttonEvent(e);
    });
  }
}
