import Mq1 from 'react-easy-marquee'; //! React 17 ???
// import Ticker from 'react-ticker';

export const Marquee = ({ APPDATA }) => {
  const marqueeText = (
    <div
      style={{
        fontSize: '0.8rem',
        backgroundColor: 'red',
        padding: '0 5px 0 5px'
      }}
      title="Change MODE in process.env"
      onClick={(e) => {
        e.target.parentElement.parentElement.parentElement.style.display =
          'none';
      }}
    >
      App is in {APPDATA.MODE} Mode (this will not show in poduction mode) -
      click here to hide
    </div>
  );

  return (
    <>
      <Mq1 duration="20000" height="1rem" background="red" pauseOnHover={true}>
        {marqueeText}
      </Mq1>
      {/* <Ticker speed={10} direction="toRight" mode="smooth">
        {() => <>{marqueeText}</>}
      </Ticker> */}
    </>
  );
};

export default Marquee;
