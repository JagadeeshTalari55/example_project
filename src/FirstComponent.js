import React from "react";

function FirstComponent({ imgLink, heading, para }) {
  return (
    <div>
      <img src={imgLink} alt="" />
      <div>
        <h2>{heading}</h2>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default FirstComponent;
