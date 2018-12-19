import React from "react";
import ServicesMenu from "../components/ServicesMenu";

const Databases = () => (
  <div className="page-background">
    <ServicesMenu />
    <div className="container">
      <h1>Database Services</h1>
      <div className="d-flex flex-row row-hl">
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/sqllarge.ico"
              alt="Glenn Curry"
            />
          </div>
          <div style={{ marginTop: "8rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/mongolarge.ico"
              alt="Glenn Curry"
            />
          </div>
          <div style={{ marginTop: "6rem" }}>
            <img
              className="images icon-pad"
              src="/images/icons/firebaselarge.ico"
              alt="Glenn Curry"
            />
          </div>
        </div>
        <div className="p-4 item-hl">
          <div style={{ marginTop: "1rem" }}>
            <h2>SQL Server</h2>
            <ul>
              <li>Database Administration</li>
              <li>Database Architecture and Design</li>
              <li>Backups, Agent jobs, Tuning and Indexing </li>
              <li>T-SQL programming</li>
              <li>Stored procedures, Views and Functions</li>
            </ul>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <h2>MongoDB</h2>
            <ul>
              <li>Account setup and key creation</li>
              <li>Schema design with Mongoose</li>
              <li>Subdoc collections and relations</li>
            </ul>
          </div>
          <div style={{ marginTop: "4rem" }}>
            <h2>Firebase</h2>
            <ul>
              <li>Account setup and key creation</li>
              <li>Schema design </li>
              <li>Async actions with Redux</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Databases;
