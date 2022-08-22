// Libraries
// import { Link } from 'react-router-dom';

// Local components

// Local content
import logo_pic from '../assets/img/logo-sanskara-tp.png';
import contact_pic from '../assets/img/contact.png';
import location_icon from '../assets/icons/location.svg';

// Local styles
import '../styles/contact.css';
import '../styles/buttons.css';

//-------------------------------------------------

function Contact({ APPDATA }) {
  const formSubmit = (e) => {
    e.target.preventdefault();
    console.log(e);
  };
  return (
    <>
      <div className="contact_container">
        <div className="contact_left">
          <img alt="logo-pic.jpeg" src={logo_pic} className="contact_logo" />
          <h1>
            Subscribe <i>To Tranquility</i>
          </h1>
          <div id="contact_description">
            <form onSubmit={(e) => formSubmit}>
              <p>
                First Name:
                <input id="name-first" label="name-first" type="text"></input>
              </p>
              <p>
                Last Name:
                <input id="name-last" label="name-last" type="text"></input>
              </p>
              <p>
                Email Address:
                <input id="email" label="email" type="email"></input>
              </p>
              <p>
                Contact Number:
                <input id="contact" label="contact" type="text"></input>
              </p>
              <button type="cancel" className="buttons secondary">
                Reset
              </button>
              <button className="buttons primary" type="submit">
                Submit
              </button>
            </form>
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
                <br />• Contact Number: (MOBILE) +971 5077 427 56
                <br />• Email Address: connect@sanskara.com
                <br /> • Address:
              </p>
              <button className="buttons location" type="submit">
                <img
                  height="48px"
                  src={location_icon}
                  alt="location_icon"
                ></img>
              </button>
              <span>
                <p>
                  Villa 1, Street 12A, Plot 357 - 546,
                  <br />
                  Al Safa 2, Umm Al Sheif Road,
                  <br />
                  Dubai, UAE
                </p>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
