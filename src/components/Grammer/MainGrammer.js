import React, { useState } from "react";
import "./Gram.css";
import { Button, Container } from "reactstrap";
import axios from "axios";
import FlyingMan from './FlyingMan'
import PropCard from "./PropCard";



const MainGrammer = () => {

    const [text, setText] = useState('');
    const [reply, setReply] = useState('');
    const [score, setScore] = useState(null);

    const [loading, setLoading] = useState(false);


    const handleSubmit=()=>{
        setLoading(true);
        axios
        .post("http://localhost:8000/grammar", { text: text })
        .then((response) => {
         
          // console.log(response);
          setReply(response.data.text);
          setScore(response.data.score);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error)
        });
    }

    

  const words = [
    { id: 1, val: "Princess" },
    { id: 2, val: "Castle" },
    { id: 3, val: "Shepherd" },
    { id: 4, val: "Beautiful" },
    { id: 5, val: "Magnificient" },
  ];

  return (
    <div className="gram-main flex-col">
      <div>
      
        {words.map((word) => (
          <span key={word.id} className="word">{word.val}</span>
        ))}
        
      </div>

      <h5>Create a story using these words</h5>
      <textarea name="" id="" cols="80" rows="7" onChange={(e) => setText(e.target.value)}></textarea>

      <Button outline onClick={handleSubmit}>Submit</Button>


      <div>
      {loading === true ? (
        <FlyingMan />
      ) : <PropCard score = {score} reply = {reply} />}
    </div>
      
    </div>
  );
};

export default MainGrammer;
