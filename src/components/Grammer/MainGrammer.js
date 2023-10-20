import React, { useState } from "react";
import "./Gram.css";
import { Button } from "reactstrap";
import axios from "axios";

const MainGrammer = () => {

    const [text, setText] = useState('');
    const [reply, setReply] = useState('');
    const [score, setScore] = useState(null);


    const handleSubmit=()=>{
        axios
        .post("http://localhost:8000/grammar", { text: text })
        .then((response) => {
         
          // console.log(response);
          setReply(response.data.text);
          setScore(response.data.score)
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
      <textarea name="" id="" cols="80" rows="15" onChange={(e) => setText(e.target.value)}></textarea>

      <Button outline onClick={handleSubmit}>Submit</Button>
      <h1>{score}</h1>
      <p>{reply}</p>
    </div>
  );
};

export default MainGrammer;
