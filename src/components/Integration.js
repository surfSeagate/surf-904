import React from "react";
import ServicesMenu from "../components/ServicesMenu";

const Integration = () => (
  <div className="page-background">
    <ServicesMenu />
    <div className="container">
      <h1>Integration - ETL Services</h1>
      <div className="d-flex flex-row row-hl">
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/ssislarge.ico"
              alt="Glenn Curry"
            />
          </div>
          <div style={{ marginTop: "8rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/sqllarge.ico"
              alt="Glenn Curry"
            />
          </div>
        </div>
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <h2>SQL Server Integration Services (SSIS)</h2>
            <ul>
              <li>Creation of Packages</li>
              <li>Scheduling of Packages via SQL Agent jobs</li>
              <li>
                Tranformation of data from and to relational, multidimensional,
                file, XML and JSON sources
              </li>
              <li>Use of event handlers, variables and parameters </li>
            </ul>
          </div>
          <div style={{ marginTop: "8rem" }}>
            <h2>SQL Server custom scripts</h2>
            <ul>
              <li>Customized SQL scripts for ETL</li>
              <li>Coded with Stored Procedures</li>
              <li>Integrated into SQL Agent jos and scheduling</li>
              <li>Implement code into SSIS </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Integration;
