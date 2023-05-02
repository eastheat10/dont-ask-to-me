import { findPosts } from "./../firebase/PostRepository.js";

export async function tmp() {
  // const item = await getItem("question", "4T910PzP5cWeG09hVMnw");
  // const items = await getCollections("question");

  // write("제목", "없음");
  const items = await findPosts();
  items.docs.forEach(element => {
    console.log(element.data())
  });

  // console.log(items);
}
