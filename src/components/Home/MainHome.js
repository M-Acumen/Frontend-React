import { React, useContext, useEffect, useState } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import "./Home.css"; // Make sure to import your CSS file
import suberBoy from "../../assets/images/superboy.png";
import cube from "../../assets/images/cube.png";
import bot from "../../assets/images/bot.png";
import blue from '../../assets/images/blue.png'
import clock from '../../assets/images/clock.png'

import TodoList from "./TodoList";
import Card from "./Card";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";
import { UserContext } from "../../UserContext";
import { auth } from "../../firebase";

const MainHome = () => {

  const leaderBoard = [{id: 1, name: 'Harry', coins: 980},
  {id: 2, name: 'Ankit', coins: 755},
  {id: 3, name: 'Aditi', coins: 125},
];

  const days = [
    { id: 1, day: "M" },
    { id: 2, day: "T" },
    { id: 3, day: "W" },
    { id: 4, day: "T" },
    { id: 5, day: "F" },
    { id: 6, day: "S" },
    { id: 7, day: "S" },
  ];

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();
  // const [currentUser, setCurrentUser] = useState();
  // const [userData, setUserData] = useState();
  const [user, loading, error] = useAuthState(auth);
  const {currentUser, userData} = useContext(UserContext);
  
  // useEffect(() => {
  //   // auth.onAuthStateChanged((user) => {
  //   //   setCurrentUser(user)
  //   // })
  //   const fetchUserData = async () => {
  //     try {
  //       if (currentUser) {
  //         console.log(currentUser?.uid);

  //         const userRef = doc(db, "users", currentUser?.uid);
  //         const data = await getDoc(userRef);

  //         if (data.exists) {
  //           console.log(data?.data());
  //           setUserData(data?.data());
  //         } else {
  //           console.log("no doc");
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserData();
  // }, [currentUser]);

  return (
    <div className="bg-home">
      <div className="dummy-dash">
      <div style={{display: "flex", flexDirection: "row-reverse"}}>
      <Link to='/pomodoro'> <img className="img-clock" style={{margin: "45px 120px 0 0"}} src={clock} alt=".." /> </Link>
      </div>
      </div>

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
              <h4>{userData?.name}</h4>
              <p>{userData?.username}</p>
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
          {leaderBoard.map((leader)=>{
            return <div className="leaderBoard" key={leader.id}>
                  <p>{leader.id}</p>
                  <h5>{leader.name}</h5>
                  <p>{leader.coins}</p>
            </div>
      
          })}


          </Col>

          <Col
            className="my-flex-props round-right"
            lg="6"
            style={{ backgroundColor: "#001d3d"}}
          >
            <TodoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainHome;
