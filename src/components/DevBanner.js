import React from 'react';
import '../content/styles/app.css';

const DevBanner = ({ APPDATA }) => {
  return (
    <div
      className="marquee"
      onClick={(e) => {
        e.target.style.display = 'none';
      }}
    >
      <div>
        ╢&emsp; App is in {APPDATA.MODE.toUpperCase()} Mode.&emsp;React
        Version:&nbsp;
        {React.version}.&emsp; ► Click to hide ◄ &emsp;╟
      </div>
    </div>
  );
};

export default DevBanner;
