export const postTemplate = (post) => {
  const ul = document.createElement("ul");

  for (let c of post.comments) {
    const li = document.createElement("li");
    li.innerHTML = c.comment;
    ul.appendChild(li);
  }

  console.log(ul.textContent);

  return `
<div class="question flex flex-col content-center w-2/3">
  <div class="question-content">
    ${post.content}
  </div>
  <div class="comment mt-3">
    ${ul}
  </div>
</div>
`;
};
