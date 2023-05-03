export const postTemplate = (post, userId) => {
  let li = "";
  for (let c of post.comments) {
    li += `<li>${c.comment}</li>\n`;
  }
  const ul = `
    <ul>
      ${li}
    </ul>
  `;
  const btn = `<button>삭제하기</button>`;
  const button = userId === post.author ? btn : "";
  return `
    <div class="question flex flex-col content-center w-2/3 border-solid border-2 border-indigo-600">
      <div class="question-content">
        ${post.content}
      </div>
      <button id="${post.id}" class="reply">댓글 달기</button>
      ${button}
      <div class="comment mt-3">
        ${ul}
      </div>
  </div>
`;
};
