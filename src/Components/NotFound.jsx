import {Link} from 'react-router-dom';

const NotFound = () => {
  return(
    <>
    <h1>Not Found</h1>
    
    <ul>
      <li>
        <Link to="/">Go back home</Link>
      </li>
    </ul>
    </>
  )
}

export default NotFound;