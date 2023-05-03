import { writeQuestion } from "./firebase/PostRepository.js";

const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector("#editor"),
  height: "400px",
  initialEditType: "markdown",
  previewStyle: "vertical",
  placeholder: "모르는거, 사소한거 다 올려주세요",
});
document.querySelector(".write").addEventListener("click", () => {
  writeQuestion(editor.getHTML(), localStorage.id);
  setTimeout(() => {
    location.reload();
  }, 200);
});
