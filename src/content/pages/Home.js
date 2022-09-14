// Libraries
import { useEffect, useState, useRef } from 'react';

// Local components

// Local content
import video from '../assets/media/sanskara.mp4';
import poster from '../assets/media/frame0601.png';

// Local styles
import '../styles/home.css';

//-------------------------------------------------

function Home({ APPDATA }) {
  const [play, setPlay] = useState(true);
  const vidRef = useRef(null);

  const handlePlayVideo = () => {
    setPlay(!play);
    play ? vidRef.current.play() : vidRef.current.pause();
  };

  useEffect(() => {
    vidRef.current.controls = false;
    vidRef.current.autoPlay = false;
    // vidRef.current.muted = muted;
    vidRef.current.loop = true;
    vidRef.current.poster = poster;
    // const timer = setTimeout(setMuted, 1500, false);
    const timer = setTimeout(handlePlayVideo, 500);
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
        <div className="home_logo"></div>
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
