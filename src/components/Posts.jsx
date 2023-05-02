
import {useState, useEffect} from 'react';
import { getPosts } from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
 

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  if (posts) {
    console.log(posts);
    return (
      <div>
      <ul>
        {posts.map((user, key) => (
          <li key={key}>
            <p>{user.title}</p>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
    );
  }
};

export default Posts;