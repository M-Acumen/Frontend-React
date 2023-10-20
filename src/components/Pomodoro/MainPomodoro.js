import React, { useState } from "react";
import { useTimer } from "use-timer";
import axios from "axios";
import "./pomo.css";

import Red from "./Red";
import Green from "./Green";

import { motion } from "framer-motion";

import { Row, Col } from "reactstrap";

const MainPomodoro = () => {
  const [color, setColor] = useState("green");

  const { time, start, pause, reset, status } = useTimer({
    initialTime: 100,
    timerType: "DECREMENTAL",
  });

  const handleStartClick = () => {
    setColor("red"); // Set the color to red when the button is clicked
    start(); // Start the timer

    axios
      .post("http://localhost:8000/pomodoro/1", {})
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

      setTimeout(() => {
        axios
          .post("http://localhost:8000/pomodoro/0", {})
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }, 100000); // 100000 milliseconds = 100 seconds
  };

  return (
    <div
      className={`pomo ${color}`}
      style={{ minHeight: "100vh", paddingTop: "80px" }}
    >
      <Row>
        <Col lg="7">
          {color === "red" && <Red />}
          {color === "green" && <Green />}
        </Col>

        <Col lg="5" className="my-flex-props flex-col">
          <motion.button
            whileTap={{ scale: 1.2 }}
            className="pomo-btn"
            onClick={handleStartClick} // Call handleStartClick instead of start directly
          >
            START
          </motion.button>
          <p style={{ fontSize: "2rem" }}>
            Time Remaining:{" "}
            <span style={{ fontSize: "3rem", fontWeight: "500" }}>
              {time > 0 ? time : 0}{" "}
            </span>
          </p>

          {/* {status === "RUNNING" && <p>Running...</p>} */}
        </Col>
      </Row>
    </div>
  );
};

export default MainPomodoro;
