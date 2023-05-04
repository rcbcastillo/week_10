import albums from '../Components/data/albums.json';
import {Table} from 'reactstrap';

const Albums = () => {
  const myData = albums[0];
  const myKey = Object.keys(myData);

  return (
    <>
    <h1>Table: Albums</h1>
    <Table>
      <thead>
        <tr>
          {myKey.map((key, index)=>(
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {albums.map((data, index)=> (
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

export default Albums;