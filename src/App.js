// Libraries
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Marquee from 'react-easy-marquee';

// Local components
import Loading from '../src/components/Loading.js';
import PKGDATA from '../package.json';
import Header from './content/Header.js';
import Footer from './content/Footer.js';
import Home from './content/pages/Home.js';
import About from './content/pages/About.js';
import Contact from './content/pages/Contact.js';

// Local content

// Local styles
import './content/styles/app.css';

//-------------------------------------------------

const appName =
  process.env.REACT_APP_PROJECT_NAME || PKGDATA.name || 'App NAME Not Set';
const appSuffix =
  process.env.REACT_APP_PROJECT_FLIGHT ||
  PKGDATA.suffix ||
  'App FLIGHT Not Set';
const appVer = process.env.REACT_APP_PROJECT_VER || PKGDATA.version || '0.1.0';
const appInfo =
  process.env.REACT_APP_PROJECT_INFO || PKGDATA.info || 'App INFO Not Set';
const appHomepage =
  PKGDATA.homepage || process.env.REACT_APP_FRONTEND || 'App HOMEPAGE Not Set';
const appAuthor =
  process.env.REACT_APP_DEV_NAME || PKGDATA.author || 'Victor Wright';
const appDescription =
  process.env.REACT_APP_DESCRIPTION ||
  PKGDATA.description ||
  ' - to be described -';

const APPDATA = {
  TITLE: appName,
  NAME: appName
    .replace(/-/g, ' ')
    .replace(/(^\w{1})|(\s+\w{1})/g, (chr) => chr.toUpperCase()),
  PROJECT: appName.replace(/-/g, ' ').toUpperCase() + ' ' + appSuffix,
  VER: appVer,
  INFO: appInfo,
  DESCRIPTION: appDescription,
  WEBSITE: appHomepage,
  DEVLEAD: appAuthor,
  //---------------------------------------
  DEVTEAM: process.env.REACT_APP_PROJECT_TEAM || '',
  EMAIL: process.env.REACT_APP_DEV_EMAIL || 'victor.wright@outlook.de',
  PHONE: process.env.REACT_APP_DEV_PHONE || '+49 176 4677 4278',
  ADDRESS: process.env.REACT_APP_DEV_ADDR || '83707, Germany',
  HOMEIMG: process.env.REACT_APP_HOMEIMG || '',
  HEADERIMG: process.env.REACT_APP_HEADERIMG || '',
  FOOTERIMG: process.env.REACT_APP_FOOTERIMG || '',
  FRONTEND:
    process.env.REACT_APP_FRONTEND ||
    (process.env.HOST || 'https://127.0.0.1') +
      ':' +
      (process.env.PORT || '3000'),
  BACKEND: process.env.REACT_APP_BACKEND || 'http://127.0.0.1:5000',
  MODE: process.env.REACT_APP_PROJECT_MODE || process.env.NODE_ENV || 'Dev',
  ROOT: process.env.REACT_APP_PUBLIC_URL || '/',
  HOST: process.env.HOST || appHomepage || 'http://127.0.0.1',
  PORT: process.env.PORT || 5000
};

document.title = 'Welcome to ' + APPDATA.NAME;
//-------------------------------------------------

function App() {
  const [loading, setLoading] = useState('');

  useEffect(() => {}, [loading]); //  to re-render when any loading event occurs

  useEffect(() => {
    setLoading('Loading ...');
    // setCurrentUser(JSON.parse(sessionStorage.getItem('currentUser')));
    // sessionStorage.setItem('APPDATA', JSON.stringify(APPDATA));
    window.scrollTo(0, 0);
    setLoading('');
    return () => {
      sessionStorage.clear();
      localStorage.clear();
    };
  }, []);

  return (
    <>
      {APPDATA.MODE.substring(0, 4).toUpperCase() !== 'PROD' ? (
        <Marquee
          duration="20000"
          height="1rem"
          background="red"
          pauseOnHover={true}
        >
          <div
            style={{ fontSize: 10 }}
            title="Change MODE in process.env"
            onClick={(e) => {
              e.target.parentElement.parentElement.parentElement.style.display =
                'none';
            }}
          >
            App is in {APPDATA.MODE} Mode (this will not show in poduction mode)
            - click here to hide
          </div>
        </Marquee>
      ) : null}
      <Header APPDATA={APPDATA} />
      {/* <NavbarTop APPDATA={APPDATA} currentUser={currentUser} /> */}
      {loading ? (
        <Loading text={loading} />
      ) : (
        <>
          <Routes>
            <Route path="/" exact element={<Home APPDATA={APPDATA} />} />
            <Route path="/home" exact element={<Home APPDATA={APPDATA} />} />
            <Route path="/about" exact element={<About APPDATA={APPDATA} />} />
            <Route
              path="/contact"
              exact
              element={<Contact APPDATA={APPDATA} />}
            />
            <Route
              path="/*"
              element={
                <div
                  style={{
                    margin: '8rem',
                    color: 'red',
                    textAlign: 'center'
                  }}
                >
                  🤫 Page Not Found!
                </div>
              }
            />
          </Routes>
        </>
      )}
      <div>
        <Footer APPDATA={APPDATA} />
      </div>
    </>
  );
}

export default App;
