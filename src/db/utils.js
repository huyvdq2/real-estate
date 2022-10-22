import { collection, getDocs } from 'firebase/firestore';
import { db } from '../configs/firebase';

const postsRef = collection(db, 'posts');

export const getPosts = async () => {
  return await getDocs(postsRef).then(({ docs }) => {
    let posts = [];
    docs.forEach((doc) => {
      posts.push(doc.data());
    });
    return posts;
  });
};
