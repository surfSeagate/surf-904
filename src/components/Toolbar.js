import React from 'react';
import DrawerToggleButton from './SideDrawerButton';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

class Toolbar extends React.Component {

  // constructor(props) {
  //   super(props)

  //   let sideDrawer;
  //   let backdrop;
  //   const state = {
  //     sideDrawerOpen: false
  //   };
  //   drawerToggleClickHandler = () => {
  //     this.setState((prevState) => {
  //       return { sideDrawerOpen: !prevState.sideDrawerOpen }
  //     });
  //   };

  //   if (this.state.sideDrawerOpen) {
  //     sideDrawer = <SideDrawer />;
  //     backdrop = <Backdrop />
  //   }


  //}
  render() {
    return (
      <div>
        <header className="toolbar">
          <nav className="toolbar__navigation">
            <div>
              <DrawerToggleButton />
            </div>
            <div className="toolbar__logo"><a href='/'>The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-item">
              <ul>
                <li><a href='/'>Products</a></li>
                <li><a href='/'>Users</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <SideDrawer />
        <Backdrop />
      </div>
    )
  }
}


export default Toolbar;



// const Toolbar = props => (
//   <header className="toolbar">
//     <nav className="toolbar__navigation">
//       <div>
//         <DrawerToggleButton />
//       </div>
//       <div className="toolbar__logo"><a href='/'>The Logo</a></div>
//       <div className="spacer" />
//       <div className="toolbar_navigation-item">
//         <ul>
//           <li><a href='/'>Products</a></li>
//           <li><a href='/'>Users</a></li>
//         </ul>
//       </div>
//     </nav>
//   </header>
// );