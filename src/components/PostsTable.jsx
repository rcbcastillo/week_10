import Table from 'react-bootstrap/Table';
import {posts} from './data/posts.js';

const PostsTable = () => { 

return (
  <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>UserId</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((user, key) => (
        <tr key={key}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.body}</td>
          <td>{user.userId}</td>
        </tr>
      ))}
        
      </tbody>
    </Table>
  );
}

export default PostsTable;