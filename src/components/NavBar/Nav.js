import React from "react";
import { NavLink, Route } from 'react-router-dom';

//import styling
import './Nav.scss';

// import application components
import ContactForm from "../ContactForm/ContactForm";
import Mascot from '../Mascot/Mascot';
import InputForm from '../InputForm/InputForm';
import PaymentAmort from '../PaymentAmort/PaymentAmort';


export default class Nav extends React.Component {

    render() {
        return (
          <>
            <div className="nav__container">
                <div className="nav__apply-now-offer">
                    <a className="nav__apply-now-button" href="http://mortgagealliance.com/JohnHeckbert/apply-online" target="blank" > Apply Now</a>
                </div>
                <NavLink className="nav__link" activeClassName="active" to='/Contact Us'>Contact Us</NavLink>
                <NavLink className="nav__link" activeClassName="active" to='/Mascot'>Mascot</NavLink>
                {/* <NavLink className="nav__link" activeClassName="active" to='/Tools'>Tools</NavLink> */}
                <NavLink className="nav__link" activeClassName="active" to='/InputForm'>Mortgage Rate Estimate</NavLink>
                <NavLink className="nav__link" activeClassName="active" to='/Payment Calculator'>Payment Calculator</NavLink>
                <a className="nav__mopolo-link" href="http://mortgagealliance.com/JohnHeckbert/mopolo" target="blank">Credit Monitoring Tool</a>
                <Route path='/InputForm' component={InputForm} />
                <Route path='/Payment Calculator' component={PaymentAmort} />
                <Route path='/Contact Us' component={ContactForm} />
                <Route path='/Mascot' component={Mascot} />
                {/* <Route path='/Tools' component={Tools} /> */}
            </div>  
          </>
        )
    }
}