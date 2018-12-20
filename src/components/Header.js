import React from "react";
import { Link } from "react-router-dom";
//import DrawerToggleButton from "./SideDrawerButton";

//import Toolbar from "./components/Toolbar";

const Header = () => (
  <div className="container">
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/" className="header__content">
            <div className="spacer" />
            <img
              className="images icon-pad"
              src="/images/icons/wave.ico"
              alt="Glenn Curry"
            />
            <h1>Surf904.com</h1>
          </Link>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-item">
          <ul>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </div>

  // <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
  //   <div className="container">
  //     <Link className="navbar-brand toolbar__navigation toolbar__logo" to="/">
  //       <h3>Surf904</h3>
  //     </Link>
  //     <ul className="navbar-nav">
  //       <li className="nav-item">
  //         <Link to="/services" className="nav-link">
  //           Services
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/about" className="nav-link">
  //           About
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/resources" className="nav-link">
  //           Resources
  //         </Link>
  //       </li>
  //       <li className="nav-item">
  //         <Link to="/contact" className="nav-link">
  //           Contact
  //         </Link>
  //       </li>
  //     </ul>
  //   </div>
  // </nav>
);

export default Header;
