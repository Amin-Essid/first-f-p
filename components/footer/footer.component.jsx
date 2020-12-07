import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import tw from "../../assets/tw.png";

const constants = {
  HEADING: "Product",
  LINKS: [
    {
      text: "FAQs",
      url: "https://docs.mymusicplate.com/frequently-asked-questionse",
    },
    {
      text: "Shipping",
      url: "https://docs.mymusicplate.com/shipping-policies",
    },
  ],
};

const Footer = () => {
  return (
    <Container
      fluid
      className="text-light mt-5"
      style={{ backgroundColor: "#1C2743", padding: "75px 0 75px 0" }}
    >
      <Row className="text-center">
        <Col>
          <Row className="justify-content-md-center">
            <a href="https://www.facebook.com/mymusicplate">
              <img src={fb} style={{}} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/music_plates">
              <img src={ig} style={{ marginLeft: "30px" }} alt="logo" />
            </a>
            <a href="https://twitter.com/musicplates">
              <img src={tw} style={{ marginLeft: "30px" }} alt="logo" />
            </a>
          </Row>
        </Col>
        <Col>
          <h1 style={{ fontSize: "22px", fontWeight: "600" }}>
            {constants.HEADING}
          </h1>
          {constants.LINKS.map(({ text, url }, id) => (
            <h4
              style={{
                fontSize: "22px",
                fontWeight: "400",
                color: "#FFFFFF",
              }}
              key={text + id}
              className="mt-4 mb-4"
            >
              <a
                href={url}
                style={{ color: "#FFFFFF" }}
                className="text-decoration-none"
              >
                {text}
              </a>
            </h4>
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Footer;
