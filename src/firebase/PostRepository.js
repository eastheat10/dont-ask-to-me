import { getCollections } from "./index.js";

const questions = "questions";

export const findPosts = () => {
  return getCollections(questions);
};
