import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Services from "../components/Services";
import About from "../components/About";
import Resources from "../components/Resources";
import NotFoundPage from "../components/NotFoundPage";
import Home from "../components/Home";
import Contact from "../components/Contact";
import WebDesign from "../components/WebDesign";
import Databases from "../components/Databases";
import Reports from "../components/Reports";
import Integration from "../components/Integration";
//import createHistory from 'history/createBrowserHistory';
//import Example from '../components/Example';

//export const history = createHistory();
const AppRouter = props => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route path="/webdesign" component={WebDesign} />
        <Route path="/databases" component={Databases} />
        <Route path="/reports" component={Reports} />
        <Route path="/integration" component={Integration} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;

//<Route component={NotFoundPage} />
//<Route path="/.." component={Header} />

// <Route path="/services" component={Services} />
//   <Route path="/about" component={About} />
//   <Route path="/resources" component={Resources} />
//   <Route component={NotFoundPage} />
