import {posts} from './data/posts.js'

const Posts = () => {
  

  return (
    <div>
    <ul>
      {posts.map((user, key) => (
        <li key={key}>
          <p>{user.id}</p>
          <p>{user.title}</p>
          <p>{user.body}</p>
          <p></p>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Posts;