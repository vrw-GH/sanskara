// import MarqueeText from 'react-native-marquee';
import Ticker from 'react-ticker';

export const Marquee = ({ APPDATA }) => {
  return (
    <Ticker speed={5} mode={'smooth'} offset={'80%'}>
      {() => (
        <>
          <div
            style={{ fontSize: '0.8rem', backgroundColor: 'red' }}
            title="Change MODE in process.env"
            onClick={(e) => {
              e.target.parentElement.parentElement.style.display = 'none';
            }}
          >
            App is in {APPDATA.MODE} Mode (this will not show in poduction mode)
            - click here to hide
          </div>
        </>
      )}
    </Ticker>
    // <MarqueeText
    //   style={{ fontSize: '1rem', backgroundColor: 'red' }}
    //   speed={1}
    //   marqueeOnStart={true}
    //   loop={true}
    //   delay={1000}
    // >

    //   <div
    //     style={{ fontSize: 10 }}
    //     title="Change MODE in process.env"
    //     onClick={(e) => {
    //       e.target.parentElement.parentElement.parentElement.style.display =
    //         'none';
    //     }}
    //   >
    //     App is in {APPDATA.MODE} Mode (this will not show in poduction mode) -
    //     click here to hide
    //   </div>
    // </MarqueeText>
  );
};
export default Marquee;
