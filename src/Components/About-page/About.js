import React from "react";
import "../../App.scss";
import "./About.scss";
import rishabh from "../../Assets/images/rishabh.jpg";
import rohan from "../../Assets/images/rohan.jpg";
import amit from '../../Assets/images/amit.jpg'
import dhira from '../../Assets/images/dhira.jpg'
import sandeep from '../../Assets/images/sandeep.jpg'
import tejus from '../../Assets/images/tejus.jpg'

function About() {
  return (
    <div>
      <div className="about-grid-container">
        <div className="team-container">
          <div className="team">
            <div>
              <a
                href="https://www.instagram.com/_red_rex_/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={rohan} alt="team" />
              <p>Rohan Mahajan<br/>Founder</p>
            </div>

            <div>
              <a
                href="https://instagram.com/ritzmillan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={amit} alt="team" />
              <p>Amit Kumar<br/>President</p>
            </div>

            <div>
              <a
                href="https://instagram.com/ritzmillan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={sandeep} alt="team" />
              <p>Sandeep Chandel<br/>Technology</p>
            </div>

            <div>
              <a
                href="https://instagram.com/ritzmillan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={tejus} alt="team" />
              <p>Tejus Choudekar<br/>Marketing</p>
            </div>

            <div>
              <a
                href="https://instagram.com/ritzmillan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={dhira} alt="team" />
              <p>Dhira Negi<br/>Technology</p>
            </div>

            <div>
              <a
                href="https://instagram.com/ritzmillan"
                target="_blank"
                rel="noreferrer"
              >
                <div className="tint"></div>
              </a>
              <img src={rishabh} alt="team" />
              <p>Rishabh Pardeshi<br/>Design</p>
            </div>
          </div>
        </div>
        <div className="message-container">
          <div className="message">
            <h4>
              As an independent organization, we only take on projects that we
              truly <p className="bigtext">believe</p> in.
            </h4>
            <br />
            <br />
            <h4>
              It is our strong belief that the best{" "}
              <p className="bigtext">results</p> can only be achieved through
              working closely with the client.
            </h4>
            <br />
            <br />
            <br />
            <h4>
              We value openness in communication and willingness to accept{" "}
              <p className="bigtext">new ideas</p>.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
