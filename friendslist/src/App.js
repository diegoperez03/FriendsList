import React from 'react';
import './App.css';
import FriendsView from './Components/FriendsView'
import Login from './Components/Login'

function App() {
  const isUserLoggedIn = true
  return (
    <div className="App">
      {
        isUserLoggedIn ?
          <FriendsView /> :
          <Login />
      }
    </div>
  );
}

export default App;
