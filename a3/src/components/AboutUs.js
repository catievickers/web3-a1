import React from 'react';
import { NavLink } from 'react-router-dom';

//Simple about us container page
const AboutUs = ()=>{
    return(
        <div className="section">
            <nav className="breadcrumb is-12" aria-label="breadcrumbs">
              <ul>
                <li><NavLink to={"/" }>Home</NavLink></li>
                <li className="is-active"><span >&nbsp;&nbsp;</span>About Us</li>
              </ul>
            </nav>
            <div className="columns">
                <div className="card column">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-left">
                      </div>
                      <div className="media-content">
                        <p className="title is-4 is-marginless">
                          Catie Vickers
                        </p>
                        <p>
                          3rd year student in the Bachelor of Computer Information Systems program at Mount Royal University
                        </p>
                        <p>
                          Lots of Startbucks DoubleShot Mochas, tears, and a bit of sleep inbetween was used for this assignment.
                        </p>
                        <p>
                          For the image issue I encountered, I used this StackOverflow article: https://stackoverflow.com/questions/42580130/display-images-in-react-using-jsx-without-import
                        </p>
                        <p>
                          Also the use of React, and the Bulma CSS Framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );

};


export default AboutUs;