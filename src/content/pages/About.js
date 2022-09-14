// Libraries
import React from 'react';
import { Link } from 'react-router-dom';

// Local components
import { Gallery2 as Gallery } from '../../components/Galleries.js';

// Local content
import icon_join from '../assets/icons/join.svg';

// Local styles
import '../styles/about.css';
import '../styles/logo.css';
import '../styles/buttons.css';

//-------------------------------------------------

function About({ APPDATA }) {
  return (
    <>
      <div className="about_container">
        <div className="about_left">
          <div className="about_logo logo"></div>
          <h1>About</h1>
          <div id="about_description">
            <span>
              Sanskara is a wellness sanctuary, conscious eatery &amp; healing
              retreat. Surrounded by nature in the heart of Dubai.
              <p>
                Sanskara is not just another new business. It is Your Home
                Within. It is a way of life.
              </p>
              Curious to know more? Join our growing community. We promise… no
              chaos, only connection.
            </span>
          </div>
          <Link
            to="/contact"
            className="buttons primary"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Join Today <img alt="iconJoin" height="48px" src={icon_join}></img>
          </Link>
        </div>
        <div className="about_right">
          {/* <img className="about_pic" alt="about-pic" src={about_pic1}></img> */}
          <Gallery />
        </div>
      </div>
    </>
  );
}

export default About;
