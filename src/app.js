import {
  deleteQuestion,
  readPosts,
  writeQuestion,
} from "./firebase/PostRepository.js";

if (!localStorage.getItem("id")) {
  location.href = "http://127.0.0.1:5501/html/login.html";
}

const deletePostEvent = () => {
  const btns = document.querySelectorAll(".delete-board");
  btns.forEach((r) => {
    r.addEventListener("click", (event) => {
      deleteQuestion(event.target.id);
      document.querySelector(`.question-${event.target.id}`).remove();
    });
  });
};

const addLoadEvent = () => {
  const btn = document.getElementById("more-btn");
  btn.addEventListener("click", () => readPosts(false));
};

const main = async () => {
  fixHead();
  const isFirst = true;
  await readPosts(isFirst);
  addLoadEvent();
  deletePostEvent();
};

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

main();
