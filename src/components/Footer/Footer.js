import React, { Component } from 'react';
  
// import logos
import youtube from '../images/youtube_logo.jpeg';
import instagram from '../images/instagram_logo.jpeg';
import facebook from '../images/facebook_logo.png';
import twitter from '../images/twitter_logo.jpeg';

// import styling
import './Footer.scss';

class Footer extends Component {
    
    render() {
        return (
            <div className="footer__container">
                <div className="footer__sm-links">
                    <a className="footer__sm-facebook" href="https://facebook.com/Finish.TheTrail.3" target="blank"><img src={facebook} alt="facebook logo" width="25" /></a>
                    <a className="footer__sm-youtube" href="https://youtube.com/video/QXq-rVS6VG4" target="blank"><img src={youtube} alt="youtube logo" width="25" /></a>
                    <a className="footer__sm-twitter" href="https://twitter.com/finishthetrail" target="blank"><img src={twitter} alt="twitter logo" width="25" /></a>
                    <a className="footer__sm-instagram" href="https://instagram.com/finishthetrail" target="blank"><img src={instagram} alt="instagram logo" width="25" /></a>
                </div>
                <div className="footer__copywrite">
                    <p>@ Finish The Trail, 2020</p>
                </div>
                <div className="footer__contact">
                    <a className="footer__contact-phone" href="tel:+1(416)918.6715">Cell: 416.918.6715</a>
                    <a className="footer__contact-email" href="mailto:info@finisthetrail.ca" target="blank">Email: info@finishthetrail.ca</a>
                </div>
            </div>
        );
    }
}

export default Footer;