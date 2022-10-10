import Post from './Post';
import { useState, useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';

// const posts = [
//   {
//     id: 123,
//     username: 'Cooper',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://links.papareact.com/3ke',
//     caption: 'Subscribe and DESTROY that like button!',
//   },
//   {
//     id: 12,
//     username: 'Cooper',
//     userImg: 'https://links.papareact.com/3ke',
//     img: 'https://links.papareact.com/3ke',
//     caption: 'Subscribe and DESTROY that like button!',
//   },
// ];

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  console.log(posts);

  return (
    <div>
      {/* Single Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userImg={post.data().profileImg}
          username={post.data().username}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
}

export default Posts;
