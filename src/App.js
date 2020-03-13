import React from 'react';
import logo from './logo.svg';
import './App.css';
import Library from './Library';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Books app with React</h1>
        <Library />
      </header>
    </div>
  );
}

export default App;
