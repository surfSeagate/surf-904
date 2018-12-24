import React, { Component } from "react";
import { Link } from "react-router-dom";

//import "./menuContent.css";

class MenuContent extends Component {
  constructor(props) {
    super(props);

    // this.items = [];
    // for (let i = 1; i <= 5; i++) {
    //   this.items.push(i);
    // }
  }

  render() {
    return (
      <div className="menu">
        <div className="menu-item">
          <ul id="slide-out" className="sidenav">
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
        <p className="hint">
          Click outside the menu to close it, or swipe it closed on touch device
        </p>
      </div>
    );
  }
}

MenuContent.PropTypes = {
  closeCallback: React.PropTypes.func.isRequired
};

export default MenuContent;

// <div className="menu-item" key={i}></div>

// <a
//               href="https://github.com/Middlerun/cheeseburger-menu"
//               onClick={this.props.closeCallback}
//               target="_blank"
//             >
//               Menu item {i}
//             </a>
