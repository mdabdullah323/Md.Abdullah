import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import pdf from "../../Assets/mdabdullah.pdf";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
