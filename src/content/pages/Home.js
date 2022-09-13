// Libraries
import { useState, useEffect } from 'react';

// Local components

// Local content
import video from '../assets/media/sanskara.mp4';
import poster from '../assets/media/frame0601.png';

// Local styles
import '../styles/home.css';

//-------------------------------------------------

function Home({ APPDATA }) {
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const timer = setTimeout(setMuted, 1000, false);
    return () => {
      clearTimeout(timer);
    };
  }, [muted]);

  return (
    <>
      <div
        className="home_container"
        style={{
          backgroundImage: 'url(' + APPDATA.HOMEIMG + ')'
        }}
      >
        <div className="home_logo"></div>
        <div className="home_video">
          <video
            controls={false}
            autoPlay={true}
            muted={muted}
            loop={true}
            poster={poster}
            // poster="../assets/media/frame0601.png"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="home_openingsoon">Opening Soon</p>
      </div>
    </>
  );
}

export default Home;
