// Libraries
import { Link } from 'react-router-dom';

// Local components

// Local content

// Local styles
import '../content/styles/header.css';
import '../content/styles/menus.css';

//-------------------------------------------------

const Header = ({ APPDATA }) => {
  return (
    <>
      <div className="header_container">
        <div className="menu_top_right">
          <Link to="/home" className="menu-link">
            Home
          </Link>{' '}
          &nbsp;
          <Link to="/about" className="menu-link">
            About
          </Link>{' '}
          &nbsp;
          <Link to="/about" className="menu-link">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
