import React, { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Applications</h1>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard/>} />
          <Route path="/preferences" element={<Preferences/>} />
        </Routes>
    </div>
  );
}

export default App;
