import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewContactForm from './components/NewContactForm/NewContactForm';

// import images
import Banner from './components/images/under-construction.jpg';

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={Banner} alt="under construction" />
      </header> */}
      {/* <Header /> */}
      <NewContactForm />
      {/* <Footer /> */}
    </div>
  );
}

