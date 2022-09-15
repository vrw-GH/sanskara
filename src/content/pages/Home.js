// Libraries
import { useEffect, useState, useRef } from 'react';

// Local components

// Local content
import video from '../assets/media/sanskara.mp4';
import poster from '../assets/media/frame0601.png';

// Local styles
import '../styles/home.css';
import '../styles/logo.css';

//-------------------------------------------------

function Home({ APPDATA }) {
  const [play, setPlay] = useState(true);
  const vidRef = useRef(null);

  const unMute = () => {
    vidRef.current.muted = false;
  };

  const handlePlayVideo = () => {
    setPlay(!play);
    play ? vidRef.current.pause() : vidRef.current.play();
  };

  useEffect(() => {
    vidRef.current.controls = false;
    vidRef.current.autoPlay = true;
    vidRef.current.muted = true;
    vidRef.current.loop = true;
    vidRef.current.poster = poster;
    vidRef.current.play();
    const timer = setTimeout(unMute, 500);
    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="home_container"
        style={{
          backgroundImage: 'url(' + APPDATA.HOMEIMG + ')'
        }}
      >
        <div className="home_logo logo"></div>
        <div className="home_video" onClick={handlePlayVideo}>
          {/* <video
            controls={false}
            autoPlay={!muted}
            muted={muted}
            loop={true}
            poster={poster}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
          <video ref={vidRef}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="home_welcomemsg">Opening Soon</p>
      </div>
    </>
  );
}

export default Home;
