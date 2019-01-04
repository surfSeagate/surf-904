import React from "react";

const Jumbo = props => (
  <div className="jumbotron-background">
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-6 jumbotron-header">Welcome to Surf904.com</h1>
        <h2 className="jumbotron-header">
          Serving the Jacksonville - First Coast software development needs....
        </h2>

        <p className="jumbotron-header">
          Providing web, database, reporting and integration development
          consulting services.
        </p>
        <div className="button-about">
          <a className="btn btn-primary btn-lg" href="/about" role="button">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);
export default Jumbo;
