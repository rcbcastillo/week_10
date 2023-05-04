import albums from '../Components/data/albums.json';
import {Table} from 'reactstrap';

 Album = () => {
  const myData = albums[0];
  const myKeys = Object.keys(myData);

  return (
    <>
    <Table>
      <thead>
        <tr>
          {myKeys.map((key, index)=> (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {albums.map((data, index)=> (
          <tr key={index}>
            {myKeys.map((key, index) => {
              <td key={index}>{data[key]}</td>
            })}
          </tr>
        ))}
      </tbody>
    </Table>
    </>
  );

};

export default Album;