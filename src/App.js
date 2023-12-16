import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Deshboard from './pages/Deshboard';
import {useState} from 'react';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='w-screen min-h-screen bg-neutral-900 flex flex-col'>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>}></Route>
        <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/Singup" element={<Singup setIsLoggedIn={setIsLoggedIn}/>}></Route>
        <Route path="/Deshboard" element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Deshboard/>
        </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
