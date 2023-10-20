import React from 'react'
import './Home.css'
const Card = (props) => {
  return (
    <div className='card-dash'>
        <h1>{props.title}</h1>
        <p>{props.value}</p>
        <i className={props.icon}></i>
    </div>
  )
}

export default Card