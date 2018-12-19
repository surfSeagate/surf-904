import React from "react";
import ServicesMenu from "../components/ServicesMenu";

const Reports = () => (
  <div className="page-background">
    <ServicesMenu />
    <div className="container">
      <h1>Reporting Services</h1>
      <div className="d-flex flex-row row-hl">
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/ssrslarge.ico"
              alt="Glenn Curry"
            />
          </div>
          <div style={{ marginTop: "8rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/crystallarge.ico"
              alt="Glenn Curry"
            />
          </div>
        </div>
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <h2>SQL Server Reporting Services (SSRS)</h2>
            <ul>
              <li>Repository, Scheduling and Subcription Adimistration</li>
              <li>Relational, Multidimensional and XML data sources</li>
              <li>Tabular, graphical and free form reports </li>
            </ul>
          </div>
          <div style={{ marginTop: "8rem" }}>
            <h2>SAP Crystal Reports</h2>
            <ul>
              <li>Crystal Reports Setup</li>
              <li>Relational database data sources</li>
              <li>Custom View and Stored Procedures data objects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Reports;
