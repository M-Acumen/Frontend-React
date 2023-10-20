import React from "react";
import { Row, Col, Container, Button } from "reactstrap";
import {Link} from 'react-router-dom';
import "./Home.css"; // Make sure to import your CSS file
import suberBoy from "../../assets/images/superboy.png";
import cube from "../../assets/images/cube.png";
import bot from "../../assets/images/bot.png";

import TodoList from "./TodoList";
import Card from "./Card";

const MainHome = () => {
  const days = [
    { id: 1, day: "S" },
    { id: 2, day: "M" },
    { id: 3, day: "T" },
    { id: 4, day: "W" },
    { id: 5, day: "T" },
    { id: 6, day: "F" },
    { id: 7, day: "S" },
  ];

  const progressData = [
    { id: 1, h3: "Linear equation using 2 variables", val: 0.2 },
    { id: 2, h3: "Forces & Newtons Laws of Motion", val: 0.7 },
    { id: 3, h3: "Matter - Solids, Liquids & Gases", val: 0.4 },
  ];

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  return (
    <div className="bg-home">
      <div className="dummy-dash"></div>

      <Container className="dash">
        <Row>
          <Col lg="5">
            <div className="flex-cards">
              <Card />
            </div>
          </Col>
          <Col lg="3" className="dash-item">
            <img className="img-dash" src={suberBoy} alt="avatar" />
          </Col>

          <Col lg="4" className="dash-item">
            <div className="dash-info right-dash-item">
              <h4>Aditi Sharma</h4>
              <p>Student</p>
              {days.map((day) => (
                <span
                  style={{
                    marginRight: "10px",
                    color: day.id === currentDayOfWeek ? "red" : "black",
                    textDecoration:
                      day.id === currentDayOfWeek ? "Underline" : "None",
                  }}
                  key={day.id}
                >
                  {day.day}
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="" style={{ marginTop: "50px" }}>
          <Col
            className="round-left my-flex-props flex-col"
            lg="6"
            style={{ backgroundColor: "#003566" }}
          >
            <div className="progress-card">
              <Row>
                <Col className="my-flex-props" lg="4">
                  <img className="app-icon" src={bot} alt="" />
                </Col>
                <Col lg="8">
                  <h4> Interactive Chatbot</h4>
                  <p>Talk to our virutal chatbot to solve your queries</p>
                  <Button color="primary" outline>
                  <Link to='/chatme'> Visit App</Link>  
                  </Button>
                </Col>
              </Row>

              <Row className="mt-5">
                <Col className="my-flex-props" lg="4">
                  <img className="app-icon" src={cube} alt="" />
                </Col>
                <Col lg="8">
                  <h4> Interactive Chatbot</h4>
                  <p>Talk to our virutal chatbot to solve your queries</p>
                  <Button color="primary" outline>
                  <Link to='https://aditipy.github.io/Simon.github.io/'> Visit App</Link>  
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>

          <Col
            className="my-flex-props round-right"
            lg="6"
            style={{ backgroundColor: "#001d3d" }}
          >
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHome;
