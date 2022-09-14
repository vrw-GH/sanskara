import React from 'react';
import '../content/styles/marquee.css';

const DevBanner = ({ APPDATA }) => {
  return (
    <div
      className="marquee"
      onClick={(e) => {
        e.target.style.display = 'none';
      }}
    >
      <div>
        ╢ App is in {APPDATA.MODE.toUpperCase()} Mode.&emsp;React Version:&nbsp;
        {React.version}.&emsp; ► Click to hide ◄ ╟
      </div>
    </div>
  );
};

export default DevBanner;
