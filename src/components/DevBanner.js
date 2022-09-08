import React from 'react';
import '../content/styles/app.css';

const DevBanner = ({ APPDATA }) => {
  return (
    <div
      class="marquee"
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