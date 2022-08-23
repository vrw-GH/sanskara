// Libraries
import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

// Local components

// Local content
import logo_pic from '../assets/img/logo-sanskara-tp.png';
import about_pic1 from '../assets/img/about1.jpg';
import about_pic2 from '../assets/img/about2.png';
import about_pic3 from '../assets/img/about3.png';
import icon_join from '../assets/icons/join.svg';

// Local styles
import '../styles/about.css';
import '../styles/buttons.css';

//-------------------------------------------------

function About({ APPDATA }) {
  const images = [
    { url: about_pic1 },
    { url: about_pic2 },
    { url: about_pic3 }
  ];

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
          <SimpleImageSlider
            width={'calc(100vw/12*5 + 100vw/12*1)'}
            height={'calc(100% - 40px)'}
            images={images}
            slideDuration={3}
            showBullets={true}
            showNavs={false}
            autoPlay={true}
            // autoPlayDelay={2}
            loop={false}
          />
        </div>
      </div>
    </>
  );
}

export default About;
