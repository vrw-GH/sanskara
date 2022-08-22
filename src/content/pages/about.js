// Libraries
import { Link } from 'react-router-dom';

// Local components

// Local content
import logo_pic from '../assets/img/logo-sanskara-tp.png';
import about_pic1 from '../assets/img/about1.jpg';
import icon_join from '../assets/icons/join.svg';

// Local styles
import '../styles/about.css';
import '../styles/buttons.css';

//-------------------------------------------------

function About({ APPDATA }) {
  return (
    <>
      <div className="about_container">
        <div className="about_left">
          <img alt="logo-pic.jpeg" src={logo_pic} className="about_logo" />
          <h1>About</h1>
          <div id="about_description">
            <span>
              Sanskara is a wellness sanctuary, conscious eatery &amp; healing
              retreat. Surrounded by nature in the heart of Dubai. Sanskara is
              not just another new business.
              <p>It is Your Home Within.</p>
              It is a way of life. Curious to know more? Join our growing
              community. We promise… no chaos, only connection.
            </span>
          </div>
          <Link to="/contact" className="buttons primary">
            Join Today <img alt="iconJoin" height="48px" src={icon_join}></img>
          </Link>
        </div>
        <img className="about_pic" alt="about-pic" src={about_pic1}></img>
      </div>
    </>
  );
}

export default About;
