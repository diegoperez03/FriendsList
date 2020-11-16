import React from 'react';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'

function App() {
  const isUserLoggedIn = true
  return (
    <div className="App">
      {
        isUserLoggedIn ?
          <Home /> :
          <Login />
      }
    </div>
  );
}

export default App;
