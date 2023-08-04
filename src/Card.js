import React from "react";

function Card({ heading5, heading2, bgColor }) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h5>{heading5}</h5>
      <h2>{heading2}</h2>
      <p>View Details</p>
    </div>
  );
}

export default Card;
