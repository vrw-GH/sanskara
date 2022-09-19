// Libraries
import React from 'react';
import { useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import ReactSimplyCarousel from 'react-simply-carousel';

// Local components

// Local content
import about_pic1 from '../content/assets/img/about3.png';
import about_pic2 from '../content/assets/img/about1.jpg';
import about_pic3 from '../content/assets/img/about2.png';

// Local styles

//-------------------------------------------------

export const Gallery1 = () => {
  const images = [
    { url: about_pic1 },
    { url: about_pic2 },
    { url: about_pic3 }
  ];
  return (
    <SimpleImageSlider
      width={'calc(100vw/12*5 + 100vw/12*1)'}
      height={'calc(100% - 40px)'}
      images={images}
      slideDuration={3}
      showBullets={true}
      showNavs={false}
      autoPlay={true}
      // autoPlayDelay={2}
      loop={false}
    />
  );
};

export const Gallery2 = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const images = [
    { url: about_pic1 },
    { url: about_pic2 },
    { url: about_pic3 }
  ];
  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      delay={800}
      centerMode={true}
      showSlidesBeforeInit={false}
      autoplay={true}
      speed={3000}
      infinite={true}
      easing="ease-in-out"
      containerProps={{ className: 'about_carousel' }}
      forwardBtnProps={{
        style: {
          display: 'none'
        },
        children: <span>{`>`}</span>
      }}
      backwardBtnProps={{
        style: {
          display: 'none'
        },
        children: <span>{`<`}</span>
      }}
    >
      {images.map((item) => (
        <img
          key={item.url}
          src={item.url}
          alt="about_pics"
          className="about_pic"
        />
      ))}
    </ReactSimplyCarousel>
  );
};
