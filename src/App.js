// Libraries
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

// APP components
import APPDATA from './components/APPDATA.js';
import Loading from './components/Loading.js';
import DevBanner from './components/DevBanner.js';

// Local components
import Header from './content/Header.js';
import Footer from './content/Footer.js';
import Home from './content/pages/home.js';
import About from './content/pages/about.js';
import Contact from './content/pages/contact.js';

// Local content

// Local styles
import './content/styles/app.css';

//-------------------------------------------------
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
      {!APPDATA.MODE.toUpperCase().includes('RELEASE') ? (
        <DevBanner APPDATA={APPDATA} />
      ) : null}
      <Header APPDATA={APPDATA} />
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
