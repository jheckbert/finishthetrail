import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// import { NavLink, Route } from 'react-router-dom';
import { ReCaptcha } from 'react-recaptcha-google';

// import styling 
import '../ContactForm/ContactForm.scss';
// import '../Header/Header.scss';
// import '../NavBar/Nav.scss';

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <form className="contact__form" id="inputCapture" onSubmit={this.addUser}>   
                    <section className="contact__intro">
                        <p>Thank you for your support of this community initiative. Please check the box if you want updates on our efforts.</p>
                    </section>
                    <div className="contact__form-name">
                        <label className="contact__name-label" htmlFor="name">Enter your name:</label>
                        <input className="contact__name-field" type="text" name="name" id="userName"></input>
                    </div>
                    <div className="contact__form-email">
                        <label className="contact__email-label" htmlFor="email">Enter your email address:</label>
                        <input className="contact__email-field" type="email" name="email" id="userEmail"></input>
                    </div>
                    <div className="contact__address" title="This information is required by the Town of Newmarket">
                        <label className="contact__address-label">Enter your address:</label>
                        <input className="contact__address-field" type="text" name="user_address" required/>
                    </div>
                    <div className="contact__message" title="Please provide any comments you feel are important for the Town to know">
                        <label className="contact__message-label">Comments</label>
                        <textarea className="contact__message-field" name="message" required/>
                    </div>
                    <div className="contact__authorize">
                        <label className="contact__authorize-label">Please keep me updated on this initiative.</label>
                        <input className="contact__authorize-field" type="checkbox" name="authorize" required/>
                    </div>
                    <ReCaptcha sitekey="6LcEEdoZAAAAAPCEWTu45LYP96SFDSnOaRHN_j-n" render="explicit" onLoadCallback={this.recaptchaLoaded} />
                    <button className="contact__button" name="contact-button">Send</button>
                </form>
            </>
        );
    }
}