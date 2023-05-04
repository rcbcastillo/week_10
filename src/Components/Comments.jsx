import comments from '../Components/data/comments.json';
import {Table} from 'reactstrap';

const Comments = () => {
  const myData = comments[0];
  console.log(myData);
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
        {comments.map((data, index)=> (
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

export default Comments;