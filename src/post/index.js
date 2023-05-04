export const postTemplate = (post, userId) => {
  let li = "";
  for (let c of post.comments) {
    li += `<li>${c.comment}</li>\n`;
  }
  const ul = `
    <ul id="comment-list-${post.id}">
      ${li}
    </ul>
  `;

  const btn = `<button id="${post.id}"class="delete-board">삭제하기</button>`;
  const button = userId === post.author ? btn : "";
  return `
    <div class="question question-${post.id} flex flex-col content-center w-2/3 border-solid border-2 border-indigo-600">
      <div class="question-content" style="overflow:auto;">
        ${post.content}
      </div>
      ${button}
      <div class="comment">
        ${ul}
      </div>
      <div class="comment-input">
        <textarea class="comment-area" id="comment-area-${post.id}" placeholder="댓글을 입력해주세요."></textarea>
        <button class="comment-button" id="comment-button-${post.id}">게시</button>
      </div>
  </div>
`;
};
