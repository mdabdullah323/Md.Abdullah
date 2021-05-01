import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/mdabdullah.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Development "
              content={[
                "creating the frontend-end website using the Bootstrap, Javascript,react.js,node.js,Mongodb,firebase,Complete Web Devlopment Course With Jhankar Mahbub",
              ]}
            />
            <Resumecontent
              title="Join us [Robotics club ,computer and programing language club]"
              content={[
                "I also participate in programming contests. I always learning new technology. I love problem-solving.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Daffodil International University (BACHELOR OF COMPUTER SCIENCE AND ENGINEERING (BSC IN CSE)) "
              date="2021 - Present"
              content={[`CGPA: ${3.66} (Till ${4}th Sem)`]}
            />
            <Resumecontent
              title="Daffodil International Collage (Higher Secondary Certificate )"
              date="2018"
              content={["GPA : 3.83"]}
            />
            <Resumecontent
              title="Al Haj Immam Uddin High School  (Secondary School Certificate) "
              date="2016"
              content={["GPA :4.28"]}
            />
            /
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
