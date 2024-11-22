import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Raj Thaker </span>
            from <span className="purple"> Kansas City, Missouri.</span>
            <br />
            <br />
            I studied Computer Science + Mathematics / Financial Engineering @ Washington University in St. Louis.
            <br />
            <br />
            Apart from coding, here's some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing/Watching Basketball
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A good programmer is someone who always looks both ways before crossing a one-way street."{" "}
          </p>
          <footer className="blockquote-footer">Doug Linder</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
