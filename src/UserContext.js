import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userData, setUserData] = useState()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    const fetchUserData = async () => {
        try {
          if (currentUser) {
            console.log(currentUser?.uid);
  
            const userRef = doc(db, "users", currentUser?.uid);
            const data = await getDoc(userRef);
  
            if (data.exists) {
              console.log(data?.data());
              setUserData(data?.data());
            } else {
              console.log("no doc");
            }
          }
        } catch (error) {
          console.error(error);
        }
      };
      fetchUserData();
    }, [currentUser]);
  

  return <UserContext.Provider value={{currentUser, userData}}>{children}</UserContext.Provider>;
};
