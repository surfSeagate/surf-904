import React from 'react';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

class drawerToggleButton extends React.Component {



  // state = {
  //   sideDrawerOpen: false
  // };
  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen }
  //   });
  // };

  render() {


    // let sideDrawer;
    // let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   sideDrawer = <SideDrawer />;
    //   backdrop = <Backdrop />
    // }



    return (
      <div style={{ height: '100%' }}>
        <button className="toggle-button" >
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
          <div className="toggle-button__line" />
        </button>

      </div>
    );

  }

};
export default drawerToggleButton;

// const drawerToggleButton = props => (

//   <button className="toggle-button">
//     <div className="toggle-button__line" />
//     <div className="toggle-button__line" />
//     <div className="toggle-button__line" />
//   </button>

// );
// export default drawerToggleButton;