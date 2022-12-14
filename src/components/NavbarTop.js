// Libraries
// import { useState } from "react";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';

// Local components

// Local content
// import Background from "./Background.png";
import newLogo from '../media/newLogo.png';

// Local styles
import '../content/styles/menus.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//-------------------------------------------------

const NavbarTop = ({
  APPDATA,
  handleSearchClick,
  handleClearQry,
  // categories,
  currentUser
}) => {
  return (
    <>
      {/* <Navbar sticky="top" id="nav" Collapse expand="md"> */}
      <Navbar sticky="top" id="nav" collapseOnSelect={true} expand="md">
        <Navbar.Brand
          href="/about"
          id="nav-about"
          onClick={handleClearQry}
          title={`${APPDATA.NAME} ver: ${APPDATA.VER} ${APPDATA.MODE}`}
        >
          &nbsp;
          <img
            className="logo-2"
            id="LOGO"
            src={newLogo}
            alt="logo"
            width="50"
            height="50"
            title={`${APPDATA.NAME} - Home `}
          />
          &nbsp;{APPDATA.NAME}&nbsp;
          <i style={{ fontSize: '0.6rem' }}>
            {APPDATA.VER}{' '}
            {APPDATA.MODE.substring(0, 4).toUpperCase() === 'PROD'
              ? ''
              : APPDATA.MODE}
          </i>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Link
              to="/sharing"
              onClick={handleClearQry}
              // id="Link-sharing"
              id="nav-sharing"
              className="menu-link"
            >
              Sharing
            </Link>
            <Link
              to="/recipes"
              onClick={handleClearQry}
              id="nav-recipes"
              className="menu-link"
            >
              Recipes
            </Link>
          </Nav>

          <Nav className="me-auto">
            {currentUser?.userName ? (
              <>
                <NavDropdown
                  title="My Food"
                  className="nav-drop"
                  id="collapsible-nav-dropdown"
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/myshare"
                    onClick={handleClearQry}
                    style={{ color: 'black' }}
                    id="nav-myshare"
                    className="menu-link"
                  >
                    My Sharing
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/mytitles"
                    onClick={handleClearQry}
                    style={{ color: 'black' }}
                    id="nav-mytitles"
                    className="menu-link"
                  >
                    My Recipes
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/newtitle"
                    onClick={handleClearQry}
                    style={{ color: 'black' }}
                    id="nav-newtitle"
                    className="menu-link"
                  >
                    New Recipe
                  </NavDropdown.Item>
                </NavDropdown>

                <Navbar.Brand id="nav-currentUser" style={{ marginRight: 0 }}>
                  <div style={{ padding: 0, margin: 0 }}>
                    {currentUser.profilePic ? (
                      <img
                        src={currentUser.profilePic}
                        height="34px"
                        alt="pic"
                      />
                    ) : null}
                    {/* &nbsp;{currentUser.userName} */}
                  </div>
                </Navbar.Brand>
                <NavDropdown
                  title={currentUser.userName}
                  className="nav-drop"
                  id="collapsible-nav-dropdown"
                  style={{ padding: 0, margin: 0 }}
                >
                  <NavDropdown.Item
                    as={Link}
                    to="/profile"
                    onClick={handleClearQry}
                    style={{ color: 'black' }}
                    id="nav-profile"
                    className="menu-link"
                  >
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    onClick={handleClearQry}
                    id="nav-login"
                    className="menu-link"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={handleClearQry}
                  id="nav-login"
                  className="menu-link"
                >
                  Login
                </Link>
              </>
            )}
            <Link
              to="/about"
              onClick={handleClearQry}
              title="About Us"
              id="nav-about"
              className="menu-link"
              style={{ marginLeft: '10px' }}
            >
              About
            </Link>
          </Nav>

          <ReactBootStrap.Form className="d-flex">
            <ReactBootStrap.FormControl
              type="search"
              placeholder="Recipe search (in Title)"
              autoFocus
              className="me-2"
              aria-label="Search"
            />
            <ReactBootStrap.Button
              type="submit"
              variant="light"
              onClick={(e) => handleSearchClick(e)}
              id="nav-find"
            >
              Find
            </ReactBootStrap.Button>
          </ReactBootStrap.Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarTop;
