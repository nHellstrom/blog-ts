import React from 'react';
import logo from './logo.svg';
import './App.css';
import SectionsContainer from './components/SectionsContainer/SectionsContainer';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        Header
      </header>
      <body className="App__body">
        <div className="App__welcome">
          <h1>Blog Title</h1>
          <p>Welcome! Press the button below to fetch data from the API.</p>
          <button>Click me!</button>
        </div>
        <SectionsContainer/>
      </body>
    </div>
  );
}

export default App;
