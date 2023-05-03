import { findPosts } from "./../firebase/PostRepository.js";

export async function tmp() {
  
  const items = await findPosts();
  items.docs.forEach(element => {
    console.log(element.data())
  });

}
