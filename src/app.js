import { readPagedQuestion, writeQuestion } from "./firebase/PostRepository.js";
import { readComments, writeComment } from "./firebase/CommentRepository.js";
import { postTemplate } from "./post/index.js";

const readPosts = async () => {
  const posts = await readPagedQuestion();

  for (let p of posts) {
    let comments = await readComments(p.id);
    p.comments = comments.docs.map((e) => e.data());
  }

  return posts;
};

const main = async () => {
  const posts = [];
  const items = await readPosts();

  for (let p of items) {
   posts.push(postTemplate(p));
  }
  
  const post = document.getElementById("post");
  console.log(posts);
  post.innerHTML(posts);
};

main();
