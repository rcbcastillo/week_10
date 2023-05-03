import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact><Home /></Route>
        <Route path="/about" exact><About /></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
