import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import leaf from "../../Assets/Projects/leaf.jpg";
import emotion from "../../Assets/Projects/emotion.jpg";
import editor from "../../Assets/Projects/codeEditor.jpg";
import eeg from "../../Assets/Projects/eeg.jpg";
import suicide from "../../Assets/Projects/suicide.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="knowladge-Haven"
              description="e-Commerch website.Easily to order book."
              link="https://knowledge-haven.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Creative-Agency"
              description="An user can order service, set a time limit, set a price and can upload an image as a sample.User can post reviews.User will be able to see their work progress through the status."
              link="https://creative-agency-f.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Hot onion"
              description="Order food from the menu.Sign Up to place order."
              link="https://hot-onion-restaurant-f.web.app/foodDetails/0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Quick-Ride"
              description="Rent a trans-porta availlabe here.See the locateion and rent."
              link="https://quick-ride-bd.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eeg}
              isBlog={false}
              title="The Leaguge-Sports"
              description="Selected your club.and see the player."
              link="https://the-league-sports.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
