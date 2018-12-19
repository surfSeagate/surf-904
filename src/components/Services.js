import React from "react";
import WebDesign from "./WebDesign";
import { Link } from "react-router-dom";

//const mouseOver = () => <Link to="/webdesign" />;

const Services = () => (
  <div className="page-background">
    <div className="grid-background">
      <div className="row grid  content-container">
        <div className="col">
          <Link to="/webdesign">
            <i className="fa fa-code icon-web" />
            <h4 className="header__content grid-item">Web Designs</h4>
          </Link>
        </div>
        <div className="col">
          <Link to="/databases">
            <i className="fas fa-database icon-db" />
            <h4 className="header__content grid-item">Databases</h4>
          </Link>
        </div>
        <div className="col">
          <Link to="/Reports">
            <i className="fas fa-chart-line icon-report" />
            <h4 className="header__content grid-item"> Reporting </h4>
          </Link>
        </div>
        <div className="col">
          <Link to="/integration">
            <i className="fas fa-filter icon-int" />
            <h4 className="header__content grid-item">Data Integration</h4>
          </Link>
        </div>
      </div>
    </div>
    <h1>Select a Service!</h1>
  </div>
);

export default Services;

// <ul>
// <li className="header__content" />
// <li>Styling</li>
// <li>Hosting</li>
// <li>API</li>
// </ul>
