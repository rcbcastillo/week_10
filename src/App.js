import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Users from './components/Users';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact><Home /></Route>
        <Route path="/users" ><Users />
          <Route path="/users/:id" ><Users /></Route>
        </Route>

        <Route path="/contact" exact><Contact /></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
