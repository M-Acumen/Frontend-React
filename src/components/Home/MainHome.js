import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./Home.css"; // Make sure to import your CSS file

import TodoList from "./TodoList";
import Card from "./Card";
import Progress from "./Progress";
import 'font-awesome/css/font-awesome.min.css'

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
    {id: 1, h3: 'Linear equation using 2 variables', val:0.2}, 
    {id: 2, h3: 'Forces & Newtons Laws of Motion', val:0.7},
    {id: 3, h3: 'Matter - Solids, Liquids & Gases', val: 0.4}
  ]

  
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  return (
    <div>
      <div className="dummy-dash"></div>

      <Container className="dash">
        <Row>
          <Col lg="5">
            <div className="flex-cards">
              <Card title="Level" value="10" icon=""/>
              <Card title="INC" value="25000"/>
              <Card title="Streak" value="7"/>
            </div>
          </Col>
          <Col lg="3" className="dash-item">
            <img
              className="img-dash"
              src="https://img.freepik.com/premium-photo/boys-with-stylish-handsome-hairstyles-generated-by-ai_551405-1664.jpg"
              alt="avatar"
            />
          </Col>

          <Col lg="4" className="dash-item">
            <div className="dash-info">
              <h4>Aditi Sharma</h4>
              <p>Student</p>
              {days.map((day) => (
                <span
                  style={{
                    marginRight: "10px",
                    color: day.id === currentDayOfWeek ? "red" : "black",
                    textDecoration: day.id ===currentDayOfWeek ? "Underline": "None",
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
        <Row className="" style={{marginTop: "50px"}}>
            <Col className="round-left my-flex-props flex-col" lg='6' style={{backgroundColor: "yellow"}}>
            {/* <Progress /> */}
            {/* <Progress /> */}
            {progressData.map((prog)=> <Progress h3={prog.h3} val={prog.val} />)}
            </Col>

            <Col className="my-flex-props round-right" lg='6' style={{backgroundColor: "pink"}}>
                <TodoList />
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHome;
