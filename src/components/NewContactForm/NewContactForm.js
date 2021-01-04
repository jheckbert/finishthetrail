import React, { Component } from 'react';
// import emailjs from 'emailjs-com';
// import { NavLink, Route } from 'react-router-dom';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';
import axios from 'axios';

// import components
// import Human from '../Human/Human';

// import styling 
import '../ContactForm/ContactForm.scss';
// import '../Header/Header.scss';
// import '../NavBar/Nav.scss';


// const DELAY = 1500;

// const recapRef = React.createRef();
export default class ContactUs extends Component {
    constructor(props, context) {
        super(props, context);
        this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
        this.verifyCallback = this.verifyCallback.bind(this);
    }

    componentDidMount() {
        loadReCaptcha();
        if (this.captchaDemo) {
            console.log("started, just a second")
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    onLoadRecaptcha() {
        if (this.captchaDemo) {
            this.captchaDemo.reset();
            this.captchaDemo.execute();
        }
    }

    verifyCallback(recaptchaToken) {        

        console.log('Token Shipping:', recaptchaToken)

        axios
        .post('https://74.208.211.71:7400/captcha', {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          data: {
            token: recaptchaToken,
          }
        })
        .then(result => {
            let response = result.data
            console.log('result is:', response)
    
        })
        .catch(err => {
          console.log(err);
        });
      };
    
    authUser(e) {
        e.preventDefault();
        let user_name = e.target.userName.value;
        let user_email = e.target.userEmail.value;
        let user_telephone = e.target.userAddress.value;
        let message = e.target.message.value;
        let user_auth = e.target.userAuth.value;

    }


    render() {
        return (
            <>
                <form className="contact__form" id="inputCapture" onSubmit={this.authUser}>   
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
                        <input className="contact__address-field" type="text" name="userAddress" id="userAddress" required/>
                    </div>
                    <div className="contact__message" title="Please provide any comments you feel are important for the Town to know">
                        <label className="contact__message-label">Comments</label>
                        <textarea className="contact__message-field" name="message" id="message" required/>
                    </div>
                    <div className="contact__authorize">
                        <label className="contact__authorize-label">Please indicate if you would like to receive updates</label>
                        <select className="contact__authorize-field" id="userAuth" required>
                            <option value="No">Would you like regular updates?</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <ReCaptcha
                        ref = {(el) => {this.captchaDemo = el;}}
                        size = "invisible"
                        render = "explicit"
                        sitekey="6LcIj_oZAAAAAJxwnymeMDgJKTCMvwY5cYUTkuX7"
                        onLoadCallback = {this.onLoadCallback}
                        verifyCallback = {this.verifyCallback}
                    />
                    <button className="contact__button" name="contact-button">Send</button>
                </form>
            </>
        );
    }
}