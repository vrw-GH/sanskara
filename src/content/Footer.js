import { useState } from 'react';
// import {FaFacebook,FaGithub,FaInstagram,FaDiscord,FaLinkedin} from 'react-icons/fa';
// import { GoMail } from 'react-icons/go';
import '../content/styles/footer.css';

const Footer = ({ APPDATA }) => {
  const [showImp, setShowImp] = useState(false);

  const toggleImp = () => {
    setShowImp(!showImp);
    setTimeout(() => {
      setShowImp(false);
    }, 10000);
  };

  return (
    <>
      <div className="footer_container">
        <ul className="ul_info" style={{ overflowX: 'auto' }}>
          <li>Development Team: {APPDATA.DEVTEAM}</li>
          <li>
            <small>Lead Developer: {APPDATA.DEVLEAD}</small>
          </li>
          <li title="Link opens your email app">
            Contact: {''}
            <a
              href={`mailto:${APPDATA.EMAIL}?subject=Inquiry:%20${APPDATA.PROJECT}
&body=I%20am%20interested%20in%20your%20project!`}
              style={{ color: 'white' }}
            >
              {APPDATA.EMAIL}
            </a>
          </li>
          {APPDATA.PHONE ? <li>Phone: {APPDATA.PHONE}</li> : null}
          {APPDATA.LOCATION ? <li>{APPDATA.LOCATION}</li> : null}
          <li
            onClick={toggleImp}
            style={{ cursor: 'pointer' }}
            title="Opens a popup"
          >
            <small style={{ display: !showImp ? '' : 'none' }}>
              <i>§Impressum</i>
            </small>
            <span
              style={{ display: showImp ? '' : 'none', color: 'white' }}
              title="click to hide"
              // onClick={() => setShowImp(false)}
            >
              <u>
                <strong>§Impressum</strong>
              </u>
              <h2 style={{ color: 'white' }}>{APPDATA.PROJECT}</h2>
              <h5 style={{ color: 'white' }}>Address:</h5>
              {APPDATA.LOCATION}
              <h5 style={{ color: 'white' }}>Contact:</h5>
              Contact: {APPDATA.PHONE}
              <br />
              Email: {APPDATA.EMAIL}
              <br />
              website: {APPDATA.FRONTEND}
            </span>
          </li>
        </ul>

        {/* ------ contact icons----------- */}
        {/* <ul className="ul3">
          <li>
            <a
              className="footer-icons"
              href="https://www.facebook.com/abdullah.shabk"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook className="facebook" size="1.5em" />
            </a>
          </li>
          <li>
            <a
              className="footer-icons"
              href="https://github.com/vrw-GH/final-project-wd020"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="github" size="1.5em" />
            </a>
          </li>
          <li>
            <a
              className="footer-icons"
              href="https://www.instagram.com/a.shabk/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="insta" size="1.5em" />
            </a>
          </li>
          <li>
            <a
              className="footer-icons"
              href="https://www.linkedin.com/in/abdullah-al-shabk"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="insta" size="1.5em" />
            </a>
          </li>
          <li>
            <a
              className="footer-icons"
              href="https://discord.gg/6rm4j2S2Qq"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord className="discord" size="1.5em" />
            </a>
          </li>
          <li>
            <a
              className="footer-icons"
              href={`mailto:${APPDATA.EMAIL}?subject=Inquiry:%20${APPDATA.PROJECT}
              &body=I%20am%20interested%20in%20your%20project!`}
              target="_blank"
              rel="noreferrer"
            >
              <GoMail className="discord" size="1.5em" />
            </a>
          </li>
        </ul> */}
      </div>
    </>
  );
};

export default Footer;
