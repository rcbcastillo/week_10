import posts from '../Components/data/posts.json';
import {Table} from 'reactstrap';

const Posts = () => {
  const myData = posts[0];
  const myKey = Object.keys(myData);

  return(
    <>
    <Table>
      <thead>
        <tr>
          {myKey.map((key, index)=>(
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {posts.map((data, index)=> (
          <tr key={index}>
            {myKey.map((key, index)=>(
              <td key={index}>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );
};

export default Posts;