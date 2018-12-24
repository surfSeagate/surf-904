import React from "react";
import { Link } from "react-router-dom";

const SideNav = props => (
  <div>
    <span className="open-slide">
      <a href="#" onclick="openSlideMenu()">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#fff" stroke-width="5" />
          <path d="M0,14 30,14" stroke="#fff" stroke-width="5" />
          <path d="M0,23 30,23" stroke="#fff" stroke-width="5" />
        </svg>
      </a>
    </span>
  </div>
);

export default SideNav;

// <div id="side-menu" className="side-nav">
//       <a href="#" className="btn-close" onclick="closeSlideMenu()">
//         &times;
//       </a>
//       <ul id="slide-out" className="sidenav">
//         <li>
//           <Link to="/services">Services</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/resources">Resources</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </div>
