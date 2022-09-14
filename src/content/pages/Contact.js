// Libraries

// Local components
import EmailContactForm from '../../components/EmailSend.js';

// Local content
import contact_pic from '../assets/img/contact.png';
import location_icon from '../assets/icons/location.svg';

// Local styles
import '../styles/contact.css';
import '../styles/logo.css';
import '../styles/buttons.css';

//-------------------------------------------------

function Contact({ APPDATA }) {
  return (
    <>
      <div className="contact_container">
        <div className="contact_left">
          <div className="contact_logo logo"></div>
          <h1>
            Subscribe <i>To Tranquility</i>
          </h1>
          <div id="contact_description">
            <EmailContactForm />
          </div>
        </div>
        <div className="contact_right">
          <div>
            <img
              className="contact_pic"
              alt="contact-pic"
              src={contact_pic}
            ></img>
          </div>
          <div>
            <span>
              <p>
                • Opening Hours: 8 am – 11 pm
                <br />• Contact Number: (MOBILE) +971507742756
                <br />• Email Address:&nbsp;
                <a
                  href={`mailto:connect@sanskara.com?subject=Inquiry:%20${APPDATA.PROJECT}
                    &body=I%20am%20interested%20in%20your%20project!`}
                  title="Link opens in your email app"
                >
                  connect@sanskara.com
                </a>
                <br />• Address:
              </p>
              <div className="address">
                <a href="https://goo.gl/maps/VtddMzD22ro1DAyU8">
                  <button className="buttons location">
                    <img
                      height="48px"
                      src={location_icon}
                      alt="location_icon"
                    ></img>
                  </button>
                </a>
                <p>
                  Villa 1, Street 12A, Plot 357 - 546,
                  <br />
                  Al Safa 2, Umm Al Sheif Road,
                  <br />
                  Dubai, UAE
                </p>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
