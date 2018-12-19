

import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter'
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import BackDrop from './components/Backdrop';




ReactDOM.render(

  <div style={{ height: '100%' }}>
    <AppRouter />,



  </div>,
  document.getElementById('app'));



//   <div style={{ height: '100%' }}>
//    ,
//   <Toolbar />

//   <main style={{ marginTop: '64px' }}>
//     <p>This is content</p>
//   </main>
// </div>
