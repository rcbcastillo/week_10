import users from '../Components/data/users.json';
import {Table} from 'reactstrap';

const Users = () => {

  return(
    <>
    <h1>Table: Users</h1>
    <Table>
      <thead>
        <tr>
          <th>{"id"}</th>
          <th>{"name"}</th>
          <th>{"username"}</th>
          <th>{"email"}</th>
          <th>{"address"}</th>
          
            <tr>
              <th>{"street"}</th>
              <th>{"suite"}</th>
              <th>{"city"}</th>
              <th>{"zipcode"}</th>
            </tr>
        
          <th>{"phone"}</th>
          <th>{"website"}</th>
          <th>{"company"}</th>
        </tr>
      </thead>
      <tbody>
          <tr>
          <td>{users.id}</td>
          <td>{users.name}</td>
          <td>{users.username}</td>
          <td>{users.email}</td>
          <td>{users.address}</td>
          <td>{users.phone}</td>
          <td>{users.website}</td>
          <td>{users.company}</td>
          
          </tr>
      </tbody>
    </Table>
    </>
  );
};

/*[
  'id',       'name',
  'username', 'email',
  'address',  'phone',
  'website',  'company'
*/

export default Users;