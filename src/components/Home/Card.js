import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { UserContext } from "../../UserContext";

const Card = () => {
  // const [userData, setUserData] = useState();
  const {currentUser, userData} = useContext(UserContext)

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const user = auth.currentUser;
  //       console.log(user.uid)

  //       if (user) {
  //         const userRef = doc(db, "users", user.uid); 
  //         const data = await getDoc(userRef);

  //         if (data.exists) {
  //           console.log(data)
  //           setUserData(data.data());
  //         } else {
  //           console.log("no doc");
  //         }
  //       } else {
  //         console("no user");
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchUserData()
  // }, []);
  return (
    <div className="my-flex-props">
      <div className="card-dash" style={{backgroundColor: "#ECB75C"}}>
        <div style={{ display: "flex", justifyContent: "end"}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-coin"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
        <p>{userData?.coins}</p>
        <p>Points</p>
      </div>

      <div className="card-dash" style={{backgroundColor: "#E27FD8"}}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-arrow-up-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z" />
          </svg>
        </div>
        <p>{userData?.level}</p>
        <p>Level</p>
      </div>

      <div className="card-dash" style={{backgroundColor: "#7FE2B3"}}>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-fire"
            viewBox="0 0 16 16"
          >
            <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z" />
          </svg>
        </div>
        <p>{userData?.streak}</p>
        <p>Streak</p>
      </div>
    </div>
  );
};

export default Card;
