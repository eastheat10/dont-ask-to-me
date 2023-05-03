import { write, db } from "./index.js";
import {
  query,
  orderBy,
  limit,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
const questions = "questions";

export const findPosts = () => {
  return getCollections(questions);
};
