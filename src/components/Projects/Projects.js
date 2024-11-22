import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/projects-raj/xchanger.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/projects-raj/crewmate.png";
import chatify from "../../Assets/projects-raj/coderoyale.png"
import suicide from "../../Assets//projects-raj/joe.png";
import bitsOfCode from "../../Assets/projects-raj/boondoggle.png"

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
              imgPath={chatify}
              isBlog={false}
              title="CodeRoyale"
              description="AI interview coach and preparation tool for software engineering roles."
              ghLink="https://github.com/rajthaker13/ai-job-interview"
              demoLink="https://www.coderoyale.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Boondoggle AI"
              description="AI agents to automate CRM workflows and data hygiene scoring using LLMs, Vector Databases, and PyTorch."
              ghLink="https://github.com/rajthaker13/boondoggle"
              demoLink="https://youtu.be/ve4MzRkR15Y"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Crewmate"
              description="No-code AI community manager co-pilot for brands."
              ghLink="https://github.com/rajthaker13/crewmate-prod"
              demoLink="https://crewmate.xyz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="XChanger"
              description="Financial mobile app leveraging AI for portfolio management and monetization."
              // ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://xchangerwebsite.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Uncle Joe's App"
              description="Mental health resource app for university club featured in TIME magazine launched to incoming freshman class at orientation."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://uncle-joes-resource-app.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
