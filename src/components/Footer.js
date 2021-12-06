import React from "react";
import Container from "react-bootstrap/Container";
import Section from "./Section";
import { Link } from "./../util/router";
import "./Footer.scss";

function Footer(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      className="footer"
    >
      <Container>
        <div className="FooterComponent__inner">
          <div className="brand left">
            <Link to="/">
              <img src={props.logo} alt="Logo" />
            </Link>
          </div>
          <div className="links right">
            <Link to="/sources">Sources</Link>
            <a href="https://github.com/rpsutton">Made by Paul Sutton</a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
