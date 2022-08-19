import '../content/styles/header.css';

const Header = ({ APPDATA }) => {
  return (
    <>
      <div className="header_container">
        <div className="menu_top_right">
          <span>Home &nbsp;</span>
          <span>About &nbsp;</span>
          <span>Contact </span>
        </div>
      </div>
    </>
  );
};

export default Header;
