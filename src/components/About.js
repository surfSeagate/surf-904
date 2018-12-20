import React from "react";

const About = () => (
  <div className="page-background">
    <div className="container ">
      <div className="card-body about-container">
        <div className="card  about-card  container-top">
          <div className="d-flex align-items-stretch row-hl ">
            <img
              className="images icon-pad"
              src="/images/gc.jpg"
              alt="Glenn Curry"
            />
            <div className="p-4 item-hl">
              <p>
                Besides living at the beach and the vibe, coding is my passion!
                That is why I started <b>Surf904.com</b>
              </p>
              <p>
                With over 20 years in the software industry, resolving complex
                issues and delivering quality products are second nature.
              </p>
              <p>
                I've had the opportunity to work for large corporations and
                small companies and consult for small startup businesses and the
                entrepreneur that needs IT support.
              </p>
              <p>
                I would love the opportunity to help you with your software
                project, large or small.
              </p>
              <h3>Glenn Curry</h3>
              <h3>Lead Software Engineer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
