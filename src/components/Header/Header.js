import React from 'react';
// import { BrowserRouter, Link } from 'react-router-dom';


// middleware

// styling
import './Header.scss';

// images
// import myPic from '../images/MyPicture.png';

//
export default class Header extends React.Component {

    render() {
        return (
          <>
              <header className="header__container">
                <p className="header__blink-white">*</p>
                <p className="header__blink-red">*</p>
              </header>
                    <div>
                <div className="header__banner">
                    <p>
                        In 2012, Landmark Estates gave a strip of land 9.2 m wide stretching from Rita's Avenue to Yonge St behind Tom Taylor Crescent for the purposes of a trail connection intended to be constructed in 2015. This was the culmination of the work since the original plan was drafted in 1994. 
                    </p>
                    <p>
                        <strong>The trail was not completed as planned. </strong>
                    </p>
                    <p>
                        The trail was originally contemplated as a fast, easy, safe, accessible pedestrian route to public transit for residents living west of the adjoining neighbourhoods. 
                    </p>
                    <p>
                        In the interim, a local historical religious site, including a 200 year old burial ground, has been desecrated by trespassers seeking quicker access to public transit. 
                    </p>
                    <p>
                        The Town of Newmarket in 2014 directed staff to complete the implementation of the walkway but a concerted effort of residents along the planned trail disrupted the hopes of residents everywhere. Recent efforts by the town in 2020 have fallen far short of realizing the completion of the trail for the betterment of all.  
                    </p>
                    <p>
                        Residents in the adjoining neighbourhood have suggested the town should give them the land, going so far as to suggest trespassing was fine as long as they could preserve their privacy. 
                    </p>
                    <p>
                        Join with the community today. Tell Newmarket that it's time to finish the trail and give the community what it needs - a fast, easy, safe, accessible pedestrian path to public transit. 
                    </p>
                </div>
              </div>
              {/* <div className="header__skill">
                  <h2 className="header__skill-web-dev">Web Development</h2>
                  <h2 className="header__skill-web-sec">Secure Web Infrastructure</h2>

              </div> */}
          </>
        )
    }
}