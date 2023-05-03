import { writeComment } from "./firebase/commentRepository.js";
import { readPosts, writeQuestion } from "./firebase/PostRepository.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

document.querySelector(".write").addEventListener("click", () => {
  writeQuestion(editor.getHTML(), localStorage.id);
});

const addLoadEvent = () => {
  const btn = document.getElementById("more-btn");
  btn.addEventListener("click", () => readPosts(false));
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
  //   readPosts(isFirst);
  replyClick();
  addLoadEvent();
};

main();

// 1. textarea
// 2. button
// 3. 더보기 했을 때 textarea
// 4. 
function event(e) {
   const id = e.target.id; // id = comment-area-1234
   const arr = id.split("-"); // arr = ["comment", "area", "1234"];
   const postId = arr[2]; // 1234
   // writeComment(postId, comment);
   const textarea = document.getElementById(id);
   const comment = textarea.value;
   writeComment(postId, comment);
   const ul = document.getElementById("comments-1234");
   const li = document.createElement("li");
   li.innerText = comment;
   ul.appendChild(li);
}

