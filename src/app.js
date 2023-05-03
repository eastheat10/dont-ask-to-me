import { readPagedQuestion, writeQuestion } from "./firebase/PostRepository.js";

console.log("start");
// readPagedQuestion();

const s = `[
   {
      "createdAt": 1683040016783,
      "content": "내용",
      "author": "홍길동",
      "n": 200
   },
   {
      "createdAt": 1683040016783,
      "n": 199,
      "author": "홍길동",
      "content": "내용"
   },
   {
      "n": 198,
      "content": "내용",
      "createdAt": 1683040016783,
      "author": "홍길동"
   },
   {
      "content": "내용",
      "createdAt": 1683040016783,
      "author": "홍길동",
      "n": 197
   },
   {
      "n": 196,
      "author": "홍길동",
      "createdAt": 1683040016783,
      "content": "내용"
   },
   {
      "content": "내용",
      "author": "홍길동",
      "createdAt": 1683040016783,
      "n": 195
   },
   {
      "content": "내용",
      "n": 194,
      "author": "홍길동",
      "createdAt": 1683040016783
   },
   {
      "n": 193,
      "createdAt": 1683040016783,
      "author": "홍길동",
      "content": "내용"
   },
   {
      "createdAt": 1683040016783,
      "author": "홍길동",
      "n": 192,
      "content": "내용"
   },
   {
      "createdAt": 1683040016783,
      "content": "내용",
      "author": "홍길동",
      "n": 191
   },
   {
      "author": "홍길동",
      "content": "내용",
      "n": 190,
      "createdAt": 1683040016783
   },
   {
      "createdAt": 1683040016782,
      "content": "내용",
      "author": "홍길동",
      "n": 189
   },
   {
      "content": "내용",
      "createdAt": 1683040016782,
      "n": 188,
      "author": "홍길동"
   },
   {
      "n": 187,
      "content": "내용",
      "createdAt": 1683040016782,
      "author": "홍길동"
   },
   {
      "author": "홍길동",
      "content": "내용",
      "n": 186,
      "createdAt": 1683040016782
   },
   {
      "n": 185,
      "content": "내용",
      "createdAt": 1683040016782,
      "author": "홍길동"
   },
   {
      "n": 184,
      "content": "내용",
      "author": "홍길동",
      "createdAt": 1683040016782
   },
   {
      "author": "홍길동",
      "n": 183,
      "createdAt": 1683040016782,
      "content": "내용"
   },
   {
      "createdAt": 1683040016782,
      "content": "내용",
      "n": 182,
      "author": "홍길동"
   },
   {
      "content": "내용",
      "n": 181,
      "createdAt": 1683040016782,
      "author": "홍길동"
   }
]`;
// const list = JSON.parse(s);

// list.map(q => {
//     q.createdAt = new Date(q.createdAt);
//     return q;
// })
// .forEach(q => console.log(q));


