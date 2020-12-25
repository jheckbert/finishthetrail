import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
import { NavLink, Route } from 'react-router-dom';
import { ReCaptcha } from 'react-recaptcha-google';

// import styling 
import './ContactForm.scss';
import '../Header/Header.scss';
import '../NavBar/Nav.scss';

export default class ContactUs extends Component {
    constructor(props) {
        super(props)

        this.addUser = this.addUser.bind(this);
        this.recaptchaLoaded = this.recaptchaLoaded.bind(this);

        this.state = {
            isValidUser: false
        }
        console.log('state:', this.state);
    }
    
    // componentDidMount() {
    //     loadReCaptcha()
    // }

    recaptchaLoaded() {
        console.log('captcha loaded');
    }

    addUser(e) {
        if (this.state.isValidUser) {
            alert('Token has been generated');
        } else {
            alert('Please confirm you are human');
        }
        
        e.preventDefault();
        let user_name = e.target.userName.value;
        let user_email = e.target.userEmail.value;
        let user_telephone = e.target.user_telephone.value;
        let message = e.target.message.value;
        let reason = e.target.selectorReason.value;
        
        let user = process.env.REACT_APP_EMAILJS_USER;
         
        // TODO: 'remove the account key before production build';

        // emailjs.send('angel_mortgage_contact', 'angel-contact', {user_name, user_email, user_telephone, reason, message}, user)
        // .then((result) => {
        //   console.log(result.text);
        //   // clear the form
        //     let clearInputName = document.querySelector('.contact__name-field');
        //     clearInputName.value = " ";
        //     let clearInputEmail = document.querySelector('.contact__email-field');
        //     clearInputEmail.value = " ";
        //     let clearInputTelephone = document.querySelector('.contact__telephone-field');
        //     clearInputTelephone.value = "";
        //     let clearInputSelector = document.querySelector('.contact__selector-field');
        //     clearInputSelector.value = " ";
        //     let clearInputMessage = document.querySelector('.contact__message-field');
        //     clearInputMessage.value = "Thank you for your query! ";

        // }, (error) => {
        //     console.log(error.text);
        // });
    }
    render() {
        return (
            <>
            <header className="header__container">
                <div className="header__title-container">
                  <h1 className="header__title">Contact Us</h1>
                </div>
            </header>
                <form className="contact__form" id="inputCapture" onSubmit={this.addUser}>   
                    <section className="contact__intro">
                        <p>Please feel free to contact us at any time. We look forward to helping you navigating these confusing times. We are here to help simplify the process.</p>
                    </section>
                    <div className="contact__form-name">
                        <label className="contact__name-label" htmlFor="name">Enter your name:</label>
                        <input className="contact__name-field" type="text" name="name" id="userName"></input>
                    </div>
                    <div className="contact__form-email">
                        <label className="contact__email-label" htmlFor="email">Enter your email address:</label>
                        <input className="contact__email-field" type="email" name="email" id="userEmail"></input>
                    </div>
                    <div className="contact__telephone">
                        <label className="contact__telephone-label">Enter your telephone number:</label>
                        <input className="contact__telephone-field" type="number" name="user_telephone" required/>
                    </div>
                    <div className="contact__selector">
                        <label className="contact__selector-label" htmlFor="selectorReason">Reason for reaching out today:</label>
                        <select className="contact__selector-field" id="selectorReason" required>
                            <option>Please select one of the following</option>
                            <option value="Residential">Looking for a residential mortgage</option>
                            <option value="Commercial">Need a commercial mortgage</option>
                            <option value="Coaching">Collection agents are hounding me. Need help!</option>
                            <option value="CreditCard">Want a top quality cash-back credit card</option>
                            <option value="Other">I want to discuss something else with you</option>
                        </select>
                    </div>
                    <div className="contact__message">
                        <label className="contact__message-label">Describe how we can help:</label>
                        <textarea className="contact__message-field" name="message" required/>
                    </div>
                    <ReCaptcha sitekey="6LcEEdoZAAAAAPCEWTu45LYP96SFDSnOaRHN_j-n" render="explicit" onLoadCallback={this.recaptchaLoaded} />
                    <button className="contact__button" name="contact-button">Send</button>
                </form>
                {/* <Footer /> */}
            </>
        );
    }
}

