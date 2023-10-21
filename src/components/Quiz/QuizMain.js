import React, { useState } from 'react'
import Questions from './Questions';

import {Row, Col, Container} from 'reactstrap'

import './quiz.css'

const QuizMain = () => {
  const [isAnswer, setAnswer] = useState(null);

  return (
    <div style={{backgroundColor: "white", minHeight: "100vh"}}>

      <div className='question-div'>
      <h1>This is demn Question ansadnakdn sdkandkja djkandkjand </h1>
      </div>


       <Row style={{minHeight: "50vh"}}>
       <Col lg='6' style={{backgroundColor: "red"}}>
          A
       </Col>

       <Col lg='6' style={{backgroundColor: "blue"}}>
        B
       </Col>

        </Row>



        <Row style={{minHeight: "50vh"}}>

        <Col lg='6' style={{backgroundColor: "green"}}>
          C
        </Col>

        <Col lg='6' style={{backgroundColor: "yellow"}}s>
        D
        </Col>

        </Row>


        
        
      </div>
     

  )
}

export default QuizMain