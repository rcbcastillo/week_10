import users from '../Components/data/users.json';
import {Table} from 'reactstrap';

const Users = () => {
  const myData = users[0];
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
        {users.map((data, index)=> (
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

export default Users;