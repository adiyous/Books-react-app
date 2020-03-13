import React from 'react';
import logo from './logo.svg';
import './App.css';

const bookList = [
  {title: "Don Quixote", author: "Miguel de Cervantes"},
  {title: "The Grat Gatsby", author: "F. Scott Fitzgerald"},
  {title: "War and Peace", author: "Leo Tolstoy"},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Books app with React</h1>
      </header>
    </div>
  );
}

export default App;
