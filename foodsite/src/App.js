import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/login'  element={<Login/>} />
        <Route path='/home'  element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;
