import todos from '../Components/data/todos.json';
import {Table} from 'reactstrap';

const Todos = () => {
  const myData = todos[0];
  const myKey = Object.keys(myData);

  return(
    <>
    <h1>Table: Todos</h1>
    <Table>
      <thead>
        <tr>
          {myKey.map((key, index)=>(
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {todos.map((data, index)=> (
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

export default Todos;