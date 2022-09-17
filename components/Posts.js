import Post from './Post';

const posts = [
  {
    id: 123,
    username: 'Cooper',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and DESTROY that like button!',
  },
  {
    id: 12,
    username: 'Cooper',
    userImg: 'https://links.papareact.com/3ke',
    img: 'https://links.papareact.com/3ke',
    caption: 'Subscribe and DESTROY that like button!',
  },
];

function Posts() {
  return (
    <div>
      {/* Single Posts */}
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          userImg={post.userImg}
          username={post.username}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
