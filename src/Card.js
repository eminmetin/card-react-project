import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="about">
        <h2 className="cardTitle">{props.title}</h2>
        <p className="cardDescription">{props.description}</p>
        <button>see the details</button>
      </div>
    </div>
  );
}
