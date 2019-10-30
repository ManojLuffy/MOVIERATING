import React from 'react';
import './Cards.css';

const Cards = props => {
   
    return (
          <div className="box">
            <img src={props.cardposter} alt="img" />
            <div className="title">
              <p> {props.title} </p>
            </div>
            <div className="rating"> 
              <p> {props.rating} </p>
            </div>
          </div>
    )
}

export default Cards;