import React, { Component } from 'react';
import { loadReCaptcha, ReCaptcha } from 'react-recaptcha-google';

export default class Human extends Component {
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
        let token = recaptchaToken;
        console.log(token, "Recaptcha Token");
    }

    render() {
        return (
            <>
                <ReCaptcha
                    ref = {(el) => {this.captchaDemo = el;}}
                    size = "invisible"
                    render = "explicit"
                    sitekey="6LcIj_oZAAAAAJxwnymeMDgJKTCMvwY5cYUTkuX7"
                    onLoadCallback = {this.onLoadCallback}
                    verifyCallback = {this.verifyCallback}
                />

            </>
        )};
}
