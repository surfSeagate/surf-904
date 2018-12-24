import React from "react";
import SideNav from "./SideNav";
import Backdrop from "./Backdrop";

class drawerToggleButton extends React.Component {
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <div style={{ height: "100%" }}>
        <button className="toggle-button">
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </button>
      </div>
    );
  }
}
export default drawerToggleButton;
