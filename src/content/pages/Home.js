import React from 'react';

// Local components

// Local content
import video from '../assets/media/sanskara.mp4';
import poster from '../assets/media/frame0601.png';

// Local styles
import '../styles/home.css';

//-------------------------------------------------

function Home() {
  return (
    <>
      <div className="home_body">
        <div className="home_logo"></div>
        <div className="home_video">
          <video
            controls={false}
            autoPlay={true}
            loop={true}
            poster={poster}
            // poster="../assets/media/frame0601.png"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p className="home_openingsoon">Opening Soon</p>
        {/* <svg
          width={86}
          height={86}
          viewBox="0 0 86 86"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 86,
            height: 86,
            // position: 'absolute',
            left: 1407,
            top: 979
          }}
          preserveAspectRatio="none"
        >
          <g filter="url(#filter0_d_85_158)">
            <g filter="url(#filter1_d_85_158)">
              <path
                d="M54.6101 43C54.6101 36.55 49.4501 31.39 43.0001 31.39C36.5501 31.39 31.3901 36.55 31.3901 43C31.3901 49.45 36.5501 54.61 43.0001 54.61C49.4501 54.61 54.6101 49.45 54.6101 43ZM60.6301 43C60.6301 52.89 52.8901 60.63 43.0001 60.63C33.1101 60.63 25.3701 52.89 25.3701 43C25.3701 33.11 33.1101 25.37 43.0001 25.37C52.8901 25.37 60.6301 33.11 60.6301 43ZM65.3601 24.51C65.3601 27.09 63.6401 28.81 61.0601 28.81C58.4801 28.81 56.7601 27.09 56.7601 24.51C56.7601 21.93 58.4801 20.21 61.0601 20.21C63.6401 20.21 65.3601 22.36 65.3601 24.51ZM43.0001 14.62C37.8401 14.62 27.0901 14.19 22.7901 15.91C19.7801 17.2 17.2001 19.78 16.3401 22.79C14.6201 27.09 15.0501 37.84 15.0501 43C15.0501 48.16 14.6201 58.91 16.3401 63.21C17.2001 66.22 19.7801 68.8 22.7901 69.66C27.0901 71.38 38.2701 70.95 43.0001 70.95C47.7301 70.95 58.9101 71.38 63.2101 69.66C66.2201 68.37 68.3701 66.22 69.6601 63.21C71.3801 58.48 70.9501 47.73 70.9501 43C70.9501 38.27 71.3801 27.09 69.6601 22.79C68.8001 19.78 66.2201 17.2 63.2101 16.34C58.9101 14.19 48.1601 14.62 43.0001 14.62ZM77.4001 43V57.19C77.4001 62.35 75.6801 67.51 71.8101 71.81C67.9401 75.68 62.7801 77.4 57.1901 77.4H28.8101C23.6501 77.4 18.4901 75.68 14.1901 71.81C10.7501 67.94 8.6001 62.78 8.6001 57.19V28.81C8.6001 23.22 10.7501 18.06 14.1901 14.19C18.4901 10.75 23.6501 8.59998 28.8101 8.59998H57.1901C62.3501 8.59998 67.5101 10.32 71.8101 14.19C75.2501 18.06 77.4001 23.22 77.4001 28.81V43Z"
                fill="#E1C2B6"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_85_158"
              x={-4}
              y={0}
              width={94}
              height={94}
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood flood-opacity={0} result="BackgroundImageFix" />
              <fecolormatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feoffset dy={4} />
              <fegaussianblur stdDeviation={2} />
              <fecomposite in2="hardAlpha" operator="out" />
              <fecolormatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feblend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_85_158"
              />
              <feblend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_85_158"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_85_158"
              x="4.6001"
              y="8.59998"
              width="76.7998"
              height="76.8"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood flood-opacity={0} result="BackgroundImageFix" />
              <fecolormatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feoffset dy={4} />
              <fegaussianblur stdDeviation={2} />
              <fecomposite in2="hardAlpha" operator="out" />
              <fecolormatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feblend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_85_158"
              />
              <feblend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_85_158"
                result="shape"
              />
            </filter>
          </defs>
        </svg> */}
        {/* <svg
          width={95}
          height={89}
          viewBox="0 0 95 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: 91,
            height: 85,
            position: 'absolute',
            left: 1513,
            top: 972
            // border: '1 solid black'
          }}
          preserveAspectRatio="none"
        >
          <g clip-path="url(#clip0_85_162)" filter="url(#filter0_d_85_162)">
            <g filter="url(#filter1_d_85_162)">
              <path
                d="M91.0547 48.8719C91.0547 48.6608 91.0547 48.4208 91.0452 48.1425C91.0357 47.3651 91.0168 46.4917 90.9978 45.5607C90.9219 42.8829 90.7891 40.2147 90.5804 37.7001C90.2959 34.2353 89.8786 31.3464 89.3095 29.1773C88.7089 26.9136 87.5317 24.8491 85.8956 23.1901C84.2594 21.5311 82.2216 20.3357 79.9859 19.7234C77.3016 18.994 72.047 18.5429 64.6488 18.2646C61.1299 18.1302 57.3645 18.0438 53.599 17.9958C52.2806 17.9767 51.057 17.9671 49.9568 17.9575H47.1682C46.068 17.9671 44.8444 17.9767 43.526 17.9958C39.7605 18.0438 35.9951 18.1302 32.4762 18.2646C25.078 18.5525 19.8139 19.0036 17.1391 19.7234C14.9026 20.3342 12.864 21.5291 11.2277 23.1884C9.59127 24.8476 8.41459 26.9129 7.81553 29.1773C7.23695 31.3464 6.8291 34.2353 6.54456 37.7001C6.33589 40.2147 6.2031 42.8829 6.12722 45.5607C6.09877 46.4917 6.08928 47.3651 6.0798 48.1425C6.0798 48.4208 6.07031 48.6608 6.07031 48.8719V49.4094C6.07031 49.6205 6.07031 49.8605 6.0798 50.1388C6.08928 50.9162 6.10825 51.7896 6.12722 52.7206C6.2031 55.3984 6.33589 58.0666 6.54456 60.5812C6.8291 64.046 7.24644 66.9349 7.81553 69.104C9.02959 73.7014 12.5959 77.3293 17.1391 78.5578C19.8139 79.2873 25.078 79.7384 32.4762 80.0167C35.9951 80.1511 39.7605 80.2374 43.526 80.2854C44.8444 80.3046 46.068 80.3142 47.1682 80.3238H49.9568C51.057 80.3142 52.2806 80.3046 53.599 80.2854C57.3645 80.2374 61.1299 80.1511 64.6488 80.0167C72.047 79.7288 77.3111 79.2777 79.9859 78.5578C84.5291 77.3293 88.0954 73.711 89.3095 69.104C89.888 66.9349 90.2959 64.046 90.5804 60.5812C90.7891 58.0666 90.9219 55.3984 90.9978 52.7206C91.0262 51.7896 91.0357 50.9162 91.0452 50.1388C91.0452 49.8605 91.0547 49.6205 91.0547 49.4094V48.8719V48.8719ZM84.2256 49.371C84.2256 49.5725 84.2256 49.7933 84.2161 50.0524C84.2066 50.8011 84.1876 51.6265 84.1687 52.5191C84.1023 55.0721 83.9695 57.6251 83.7703 59.9957C83.5142 63.0862 83.1538 65.62 82.708 67.3188C82.1199 69.5359 80.3937 71.2923 78.2122 71.8778C76.2204 72.4153 71.2029 72.8472 64.3833 73.1063C60.9308 73.2407 57.2127 73.327 53.5041 73.375C52.2047 73.3942 51.0001 73.4038 49.9188 73.4038H47.2062L43.6209 73.375C39.9123 73.327 36.2037 73.2407 32.7417 73.1063C25.9221 72.8376 20.8952 72.4153 18.9128 71.8778C16.7313 71.2827 15.0051 69.5359 14.417 67.3188C13.9712 65.62 13.6108 63.0862 13.3547 59.9957C13.1555 57.6251 13.0322 55.0721 12.9563 52.5191C12.9279 51.6265 12.9184 50.7915 12.9089 50.0524C12.9089 49.7933 12.8994 49.5629 12.8994 49.371V48.9103C12.8994 48.7087 12.8994 48.488 12.9089 48.2289C12.9184 47.4802 12.9374 46.6548 12.9563 45.7622C13.0227 43.2092 13.1555 40.6562 13.3547 38.2856C13.6108 35.1951 13.9712 32.6613 14.417 30.9624C15.0051 28.7454 16.7313 26.989 18.9128 26.4035C20.9046 25.866 25.9221 25.4341 32.7417 25.175C36.1942 25.0406 39.9123 24.9542 43.6209 24.9062C44.9203 24.8871 46.1249 24.8775 47.2062 24.8775H49.9188L53.5041 24.9062C57.2127 24.9542 60.9213 25.0406 64.3833 25.175C71.2029 25.4437 76.2298 25.866 78.2122 26.4035C80.3937 26.9986 82.1199 28.7454 82.708 30.9624C83.1538 32.6613 83.5142 35.1951 83.7703 38.2856C83.9695 40.6562 84.0928 43.2092 84.1687 45.7622C84.1971 46.6548 84.2066 47.4898 84.2161 48.2289C84.2161 48.488 84.2256 48.7183 84.2256 48.9103V49.371ZM40.121 62.0017L62.1259 49.0447L40.121 36.2796V62.0017Z"
                fill="#E1C2B6"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_85_162"
              x={-4}
              y={0}
              width={99}
              height={93}
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood flood-opacity={0} result="BackgroundImageFix" />
              <fecolormatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feoffset dy={4} />
              <fegaussianblur stdDeviation={2} />
              <fecomposite in2="hardAlpha" operator="out" />
              <fecolormatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feblend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_85_162"
              />
              <feblend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_85_162"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_85_162"
              x="2.07031"
              y="17.9575"
              width="92.9844"
              height="70.3664"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feflood flood-opacity={0} result="BackgroundImageFix" />
              <fecolormatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feoffset dy={4} />
              <fegaussianblur stdDeviation={2} />
              <fecomposite in2="hardAlpha" operator="out" />
              <fecolormatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feblend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_85_162"
              />
              <feblend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_85_162"
                result="shape"
              />
            </filter>
            <clippath id="clip0_85_162">
              <rect width={91} height={85} fill="white" />
            </clippath>
          </defs>
        </svg> */}
      </div>
    </>
  );
}

export default Home;
