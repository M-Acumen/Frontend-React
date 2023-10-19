import React from "react";
import "./chat.css";

import listeningImg from "../../assets/images/listening.png";

import { Row, Col, Container } from "reactstrap";

const MainChat = () => {
  return (
    <Container>
      <Row>
        <Col lg="6">
          <img className="chat-img" src={listeningImg} alt="img" style={{ height: '200px' }} />
        </Col>

        <Col lg="6">
          
        

        </Col>
      </Row>
    </Container>
  );
};

export default MainChat;
