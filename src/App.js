import React from 'react';
import './App.css';

// import images
import Banner from './components/images/under-construction.jpg';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Banner} alt="under construction" />
      </header>
    </div>
  );
}

