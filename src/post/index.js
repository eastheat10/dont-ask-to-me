export const postTemplate = (post) => {
  let li = "";
  for (let c of post.comments) {
    li += `<li>${c.comment}</li>\n`;
  }

  const ul = `
  <ul>
    ${li}
  </ul>
  `;

  return `
<div class="question flex flex-col content-center w-2/3 border-solid border-2 border-indigo-600">
  <div class="question-content">
    ${post.content}
  </div>
  <div class="comment mt-3">
    ${ul}
  </div>
</div>
`;
};
