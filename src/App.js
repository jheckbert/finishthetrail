import { React } from 'react';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import NewContactForm from './components/NewContactForm/NewContactForm';
import Human from './components/Human/Human';

// import images
import Banner from './components/images/under-construction.jpg';

export default function App() {

  // componentDidMount( 
  //   {
  //     loadReCaptcha()
  //   });

  // render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={Banner} alt="under construction" />
        </header> */}
        {/* <Header /> */}
        <NewContactForm />
        {/* <Human /> */}
        {/* <Footer /> */}
      </div>
    );
}

