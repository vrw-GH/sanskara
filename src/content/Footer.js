// Libraries
import { useState } from 'react';

// Local components
import { IconInstagram, IconYoutube } from '../components/Icons.js';

// Local content

// Local styles
import '../content/styles/footer.css';

//-------------------------------------------------

const Footer = ({ APPDATA }) => {
  const [leftUl, setLeftUl] = useState(false);

  const toggleLeftUl = () => {
    setLeftUl(!leftUl);
  };

  return (
    <>
      <div
        className="footer_container"
        style={{
          backgroundImage: 'url(' + APPDATA.FOOTERIMG + ')'
        }}
      >
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
              {!APPDATA.NAME ? null : <h1>{APPDATA.NAME}</h1>}
              {!APPDATA.VER ? null : 'Ver: ' + APPDATA.VER + ' '}
              {!APPDATA.PROJECT ? null : (
                <h3 style={{ margin: 0 }}>{APPDATA.PROJECT}</h3>
              )}
              {!APPDATA.INFO ? null : <i>{APPDATA.INFO}</i>}
              {!APPDATA.DESCRIPTION ? null : <h4>{APPDATA.DESCRIPTION}</h4>}
              {!APPDATA.FRONTEND ? null : 'Website: ' + APPDATA.FRONTEND}
            </li>
            <li>
              <>
                {!APPDATA.DEVTEAM ? null : 'Team: ' + APPDATA.DEVTEAM}
                <br />
                {!APPDATA.DEVLEAD ? null : (
                  <small>
                    Lead Developer: <b>{APPDATA.DEVLEAD}</b>
                    <br />
                  </small>
                )}
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
                  <br />
                  {!APPDATA.LOCATION ? null : 'Address: ' + APPDATA.LOCATION}
                </small>
              </>
            </li>
          </ul>
        </div>
        <div className="footer_right">
          <a href="https://www.instagram.com/sanskaradxb" rel="noreferrer">
            <IconInstagram />
          </a>
          <a
            href="https://www.youtube.com/c/illuminationsdubaiME"
            rel="noreferrer"
          >
            <IconYoutube />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
