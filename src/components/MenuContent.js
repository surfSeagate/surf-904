import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      <div className="menu" style={{ marginTop: "20px" }}>
        <div className="menu-item">
          <ul id="slide-out" className="sidenav">
            <li>
              <Link to="/services" onClick={this.props.closeCallback}>
                Services
              </Link>
            </li>

            <li>
              <Link to="/resources" onClick={this.props.closeCallback}>
                Resources
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={this.props.closeCallback}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr />
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
