// Libraries

// Local components
import { IconInstagram, IconYoutube } from '../components/Icons.js';
import DevInfo from '../components/DevInfo.js';

// Local content

// Local styles
import '../content/styles/footer.css';

//-------------------------------------------------

const Footer = ({ APPDATA }) => {
  return (
    <>
      <div
        className="footer_container"
        style={{
          backgroundImage: 'url(' + APPDATA.FOOTERIMG + ')'
        }}
      >
        <div className="footer_left">
          <DevInfo APPDATA={APPDATA} />
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
