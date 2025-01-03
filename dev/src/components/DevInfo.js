// Libraries
import React, { useRef, useState } from 'react';
import axios from 'axios';

// Local components

// Local content

// Local styles
import '../content/styles/footer.css';

//-------------------------------------------------

const DevInfo = ({ APPDATA }) => {
  const formFName = useRef('');
  const formEmail = useRef('');
  const [contacted, setContacted] = useState(false);
  const [leftUl, setLeftUl] = useState(false);

  const toggleLeftUl = () => {
    setLeftUl(!leftUl);
  };

  const formInput = {
    height: '1rem',
    margin: '0',
    width: 'min-content',
    padding: '2px',
    fontSize: '0.7rem',
    align: 'center'
  };

  const formBtn = {
    height: '2rem',
    margin: '0',
    borderRadius: '5px',
    width: 'min-content',
    padding: '5px',
    fontSize: '0.7rem',
    align: 'center'
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formFName.current.value || !formEmail.current.value) {
      alert('Please enter all info.');
      return;
    }

    const body = {
      firstName: formFName.current.value,
      email: formEmail.current.value,
      msg: 'Developer Inquiry - Sanskara',
      adminEmail: 'victor.wright@outlook.de'
    };

    const url = process.env.REACT_APP_EMAILER_API;

    (async () => {
      try {
        setContacted(true);
        const response = await axios({
          method: 'post',
          url,
          headers: { 'content-type': 'application/json' },
          // timeout: 3000,
          data: body
        });
        if (response.data.sent) {
          alert(response.data.message);
        } else {
          console.log(response.data.message, response.data.info);
          setContacted(false);
          alert(response.data.message);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('AXIOS:', error);
        } else {
          console.log('Unexpected:', error);
        }
        alert('Error sending email!\nPlease check console.');
      }
    })();
  };

  return (
    <>
      <span
        onClick={toggleLeftUl}
        // onMouseOver={toggleLeftUl}
        title="Open Developer Info"
        style={{ display: leftUl ? 'none' : 'block' }}
      >
        <i>I n f o</i>
      </span>
      <div
        id="dev_info"
        title="click anywhere to hide"
        onClick={toggleLeftUl}
        onMouseLeave={() => {
          setLeftUl(false);
        }}
      >
        <ul
          className="left_ul"
          style={{
            display: leftUl ? 'block' : 'none'
          }}
        >
          <u>
            {/* <strong>§Impressum</strong> */}
            <strong>Information</strong>
          </u>
          <li>
            {!APPDATA.NAME ? null : (
              <h1 style={{ marginBottom: 0 }}>{APPDATA.NAME}</h1>
            )}
            {!APPDATA.VER ? null : 'Ver: ' + APPDATA.VER + ' '}
            {!APPDATA.SUFFIX ? null : (
              <h3 style={{ margin: 0 }}>{APPDATA.SUFFIX}</h3>
            )}
            {!APPDATA.INFO ? null : <i>{APPDATA.INFO}</i>}
            {!APPDATA.DESCRIPTION ? null : <h4>{APPDATA.DESCRIPTION}</h4>}
          </li>
          <li>
            <>
              {!APPDATA.DEVTEAM ? null : (
                <>
                  Team: <a href={APPDATA.TEAMWEB}target="_blank" rel="noreferrer" title="Visit Webpage"><b>{APPDATA.DEVTEAM}</b></a>
                  <br />
                  </>
              )}              
              {!APPDATA.DEVLEAD ? null : (
                <small>
                  Lead Developer: <a href={APPDATA.LEADWEB}target="_blank" rel="noreferrer" title="Visit Profile"><b>{APPDATA.DEVLEAD}</b></a>
                  <br />
                </small>
              )}
              {!APPDATA.REPO.page ? null : (
                <>
                  Repo: <a href={APPDATA.REPO.page} 
                  target="_blank" rel="noreferrer" title="Visit Repository">
                    <small>{APPDATA.REPO.page}</small>
                  </a>
                  <br />
                </>
              )}
              Contact us:
              <br />
              <small>
                <form
                  style={{ display: contacted ? 'none' : 'block' }}
                  title="Contact us."
                >
                  <input
                    ref={formFName}
                    name="nameFirst"
                    id="nameFirst"
                    // label="First Name"
                    placeholder="First Name"
                    type="text"
                    required={true}
                    title=""
                    onClick={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                    style={formInput}
                  ></input>
                  <br />
                  <input
                    ref={formEmail}
                    name="email"
                    id="email"
                    // label="Email"
                    placeholder="Email"
                    type="email"
                    required={true}
                    title=""
                    onClick={(e) => e.stopPropagation()}
                    onMouseLeave={(e) => e.stopPropagation()}
                    style={formInput}
                  ></input>
                  <button type="button" style={formBtn} onClick={sendEmail}>
                    Send
                  </button>
                </form>
                {!APPDATA.PHONE ? null : (
                  <a
                    href={`tel:${APPDATA.PHONE}`}
                    style={{ color: 'white' }}
                    title="Click to call"
                  >
                    Phone: {APPDATA.PHONE}
                  </a>
                )}

                <br />
                {!APPDATA.ADDRESS ? null : 'Address: ' + APPDATA.ADDRESS}
                <br />
                {!APPDATA.EMAIL ? null : (
                  <>
                    <a
                      href={`mailto:${APPDATA.EMAIL}?subject=Inquiry:%20${APPDATA.PROJECT}
                    &body=I%20am%20interested%20in%20your%20project!`}
                      style={{ color: 'white' }}
                      title="Click to open in your email app"
                    >
                      Email: {APPDATA.EMAIL}
                    </a>
                  </>
                )}
              </small>
            </>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DevInfo;
