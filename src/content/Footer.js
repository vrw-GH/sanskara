import { useState } from 'react';
import { siGithub } from 'simple-icons';

// import github_ico from 'https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg';

import '../content/styles/footer.css';

const Footer = ({ APPDATA }) => {
  const [leftUl, setLeftUl] = useState(false);
  const [rightUl, setRightUl] = useState(false);

  const toggleLeftUl = () => {
    setLeftUl(!leftUl);
  };
  const toggleRightUl = () => {
    setRightUl(!rightUl);
  };
  console.log(siGithub);

  return (
    <>
      <div className="footer_container">
        <div className="footer_left">
          <span
            onClick={toggleLeftUl}
            onMouseOver={toggleLeftUl}
            title="Open Developer Info"
            style={{ display: leftUl ? 'none' : 'block' }}
          >
            <i>I n f o</i>
          </span>
          <ul
            className="left_ul"
            style={{
              display: leftUl ? 'block' : 'none'
            }}
            title="click to hide"
            onClick={toggleLeftUl}
            onMouseLeave={() => {
              setLeftUl(false);
            }}
          >
            <u>
              {/* <strong>§Impressum</strong> */}
              <strong>Information</strong>
            </u>
            <li>
              {!APPDATA.PROJECT ? null : <h2>{APPDATA.PROJECT}</h2>}
              {!APPDATA.FRONTEND ? null : 'Website: ' + APPDATA.FRONTEND}
            </li>
            <li>
              {!APPDATA.DEVTEAM ? null : 'Team: ' + APPDATA.DEVTEAM + '<br />'}
              {!APPDATA.DEVLEAD ? null : (
                <small>Lead Developer: {APPDATA.DEVLEAD}</small>
              )}
            </li>
            <li>
              Contact:
              <br />
              <small>
                {!APPDATA.EMAIL ? null : (
                  <a
                    href={`mailto:${APPDATA.EMAIL}?subject=Inquiry:%20${APPDATA.PROJECT}
                    &body=I%20am%20interested%20in%20your%20project!`}
                    style={{ color: 'white' }}
                    title="Link opens in your email app"
                  >
                    Email: {APPDATA.EMAIL}
                  </a>
                )}
                <br />
                {!APPDATA.PHONE ? null : 'Phone: ' + APPDATA.PHONE}
              </small>
            </li>
            {!APPDATA.LOCATION ? null : (
              <li>
                Address: <small>{APPDATA.LOCATION}</small>
              </li>
            )}
          </ul>
        </div>
        <div className="footer_right">
          <span
            onClick={toggleRightUl}
            onMouseOver={toggleRightUl}
            title="Open Social Media"
            style={{ display: rightUl ? 'none' : 'block' }}
          >
            <i>Social</i>
          </span>
          <ul
            className="right_ul"
            style={{
              display: rightUl ? 'block' : 'none'
            }}
            onClick={toggleRightUl}
            onMouseLeave={() => {
              setRightUl(false);
            }}
          >
            <u>
              {/* <strong>§Impressum</strong> */}
              <strong>Social Media</strong>
            </u>
            <li>
              <a
                className="footer-icons"
                href="https://vrw-gh.github.io/vrw-GH/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  color="#CCCCCC"
                  alt="github"
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
                />
              </a>
            </li>
            {/*             
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
          </li>*/}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
