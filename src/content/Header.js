import '../content/styles/header.css';

const Header = ({ APPDATA }) => {
  return (
    <div>
      <div className="header_container">
        <span>
          <h4>{APPDATA.INFO}</h4>
        </span>
        <span>
          <br />
          <h1>{APPDATA.NAME.toUpperCase()}</h1>
        </span>
      </div>
    </div>
  );
};

export default Header;
