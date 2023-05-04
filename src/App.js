import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Posts from './Components/Posts';
import Albums from './Components/Albums';
import Comments from './Components/Comments';
import Photos from './Components/Photos';
import Todos from './Components/Todos';
import Users from './Components/Users';
import Contact from './Components/Contact';
import About from './Components/About'
import NotFound from './Components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route path="/" exact><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/posts" ><Posts /></Route>
        <Route path="/albums" ><Albums /></Route>
        <Route path="/comments" ><Comments /></Route>
        <Route path="/photos" ><Photos /></Route>
        <Route path="/todos" ><Todos /></Route>
        <Route path="/users" ><Users /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/404"><NotFound /></Route>
      </BrowserRouter>
    </>
  );
}

export default App;
